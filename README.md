# dolphin-scratchpad

Toggle visibility of a Dolphin window with a keyboard
shortcut. (Similar to XMonad Scratchpads and the KWin/Script
[Shimmer](https://github.com/fooblahblah/shimmer)).

Also, toggle visibility of a Konsole window with a keyboard shortcut. 

Currently its little more than an adaption of
[Shimmer](https://github.com/fooblahblah/shimmer)


# Installing

1. in the root of the repo: `kpackagetool5 -i .`
2. Settings, Window Behavior, KWin Scripts. Ensure "Dolphin-Scratchpad" is enabled.
3. Logout and login to KDE
4. Run the desktop files `dolphin (ScratchPad)` and `konsole (ScratchPad)`. For
   autostart, copy them to `~/.config/autostart`
5. You should be able to assign a global shortcut to toggle the visibility of
   this dolphin instance in Settings, Shortcuts, Global Shortcuts, Kwin. There are two new Actions:
   - Toggle Dolphin
   - Toggle Konsole


# Updating

1. in the root of the repo: `kpackagetool5 -u .`

# Uninstalling

1. in the root of the repo: `kpackagetool5 -r .`
2. remove the `.desktop` files from where you have copied them to
3. remove global shortcuts
