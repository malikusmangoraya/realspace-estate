import React, { useState, useEffect } from 'react';
export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };
  if (!isOffline && !isInstallable) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {isOffline && (
        <div className="flex items-center gap-2 rounded-lg bg-amber-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-amber-200 animate-pulse" />
          Offline Mode - Viewing Cached Content
        </div>
      )}
      {isInstallable && (
        <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-700 bg-slate-900/95 p-4 text-white shadow-2xl backdrop-blur">
          <div>
            <h4 className="font-semibold text-slate-100">Install Web App</h4>
            <p className="text-xs text-slate-400">Add to home screen for faster access & offline availability.</p>
          </div>
          <button
            onClick={handleInstallClick}
            className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-indigo-500"
          >
            Install
          </button>
        </div>
      )}
    </div>
  );
}