// components/BootstrapClient.tsx
'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap JS when the component mounts on the client side
    // This ensures 'window.bootstrap' is available.
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}