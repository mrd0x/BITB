# BITB
Browser templates for Browser In The Browser (BITB) attack.

More information: https://mrd0x.com/browser-in-the-browser-phishing-attack/ 

# Usage

Each folder has a `index.html` file which has 4 variables that must be modified:

* **XX-TITLE-XX** - The title that shows up for the page (e.g. Sign in to your account now)
* **XX-DOMAIN-NAME-XX** - Domain name you're masquerading as. (e.g. gmail.com)
* **XX-DOMAIN-PATH-XX** - Domain path (e.g. /auth/google/login)
* **XX-PHISHING-LINK-XX** - Phishing link which will be embedded into the iFrame (e.g. https://example.com)

Furthermore, if you're using a Windows template you should update the `logo.svg` which is the icon of the website you're masquerading as. The default logo is Microsoft.


# Windows-DarkMode-Delay

The Windows-DarkMode-Delay folder makes use of jQuery's fadeIn() function to add a slight delay to the pop-up window as it appears. This is only one way of making the Window appear in a delayed fashion, there's various other ways to do the same.

# Demo

![Demo](https://github.com/mrd0x/BITB/blob/main/demo.gif)

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
