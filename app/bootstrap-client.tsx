'use client'

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import only on client
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null; // It doesn't render anything
}
