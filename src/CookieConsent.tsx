import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Link } from '@mui/material';
import { CheckCircle } from 'lucide-react';
import { AlertTriangle as Warning } from 'lucide-react';

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(localStorage.getItem('cookieConsent') === 'true');

  useEffect(() => {
    if (!cookieConsent) {
      setOpen(true);
    }
  }, [cookieConsent]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent(true);
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setCookieConsent(false);
    setOpen(false);
    // Optionally, clear cookies or disable tracking here
  };

  return (
    <Dialog
      open={open}
      onClose={() => {}}
      aria-labelledby="cookie-consent-dialog-title"
      aria-describedby="cookie-consent-dialog-description"
    >
      <DialogTitle id="cookie-consent-dialog-title" className="flex items-center gap-2">
        <Warning className="text-yellow-500" /> Cookie Consent
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" id="cookie-consent-dialog-description">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
          By clicking "Accept All", you consent to our use of cookies.
        </Typography>
        <Typography variant="body2" className="mt-4">
          For more information, please read our <Link href="#" color="primary">Privacy Policy</Link>.
        </Typography>
      </DialogContent>
      <DialogActions className="p-4">
        <Button onClick={handleDecline} color="primary">
          Decline
        </Button>
        <Button onClick={handleAccept} color="primary" variant="contained" className="ml-2">
          Accept All <CheckCircle className="ml-1" size={16} />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CookieConsent;
