# BITB Server

Flask application for Browser In The Browser (BITB) attack.

It's a Fork of https://github.com/mrd0x/BITB

More information: https://mrd0x.com/browser-in-the-browser-phishing-attack/ 


# Requirements
pip3 install -r requirements.txt

# Usage

phishing.ini file has 4 variables that must be modified:

* **PHISHING_TITLE** - The title that shows up for the page (e.g. Sign in to your account now)
* **DOMAIN_NAME** - Domain name you're masquerading as. (e.g. gmail.com)
* **DOMAIN_PATH** - Domain path (e.g. /auth/google/login)
* **BITB_TEMPLATE** * - Look alike browser template name (e.g. Windows-DarkMode-Delay)

DOMAIN_NAME = https://gmail.com
DOMAIN_PATH = /login
PHISHING_TITLE = Gmail
BITB_TEMPLATE = Windows-DarkMode-Delay

# Run the Flask app

```bash

cd bitb_server
python3 main.py

```

Open the browser and go to http://localhost:5000/test and you see a live test page. 

Furthermore, if you're using a Windows template you should update the `logo.svg` which is the icon of the website you're masquerading as. The default logo is Microsoft.
# Integration

You can use this with https://getgophish.com/ leverage your campaings
# Windows-DarkMode-Delay

The Windows-DarkMode-Delay folder makes use of jQuery's fadeIn() function to add a slight delay to the pop-up window as it appears. This is only one way of making the Window appear in a delayed fashion, there's various other ways to do the same.

# Detecting Color Preference

To get the most out of this you should determine the OS from the user agent and the color preference and display the appropriate template.

To find out if you should use dark or light templates check out: https://stackoverflow.com/questions/50840168/how-to-detect-if-the-os-is-in-dark-mode-in-browsers

# Detecting BITB

## Dragging the Window

One way of detecting BITB is by attempting to drag the window to the edge of the browser. If the window cannot escape the browser then it's not a real window. 

## Browser Extension

@odacavo released a great browser extension that can detect and warn users about embedded iframes. It's available here: https://github.com/odacavo/enhanced-iframe-protection

All credits go to @odacavo.

# Disclaimer

Usage of these templates for attacking targets without prior consent is illegal. It's the end user's responsibility to obey all applicable laws. The developer is not responsible for any misuse of these templates.
