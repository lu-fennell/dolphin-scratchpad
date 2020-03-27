# dolphin-scratchpad

Toggle visibility of a Dolphin window with a keyboard
shortcut. (Similar to XMonad Scratchpads and the KWin/Script
[Shimmer](https://github.com/fooblahblah/shimmer)).

Currently its little more than an adaption of
[Shimmer](https://github.com/fooblahblah/shimmer)



# Installing

1. in the root of the repo: plasmapkg --type kwinscript -i .
1. Settings, Window Behavior, KWin Scripts. Ensure "Dolphin-Scratchpad" is enabled.
1. Logout and login to KDE
1. Start a dolphin instance like this
```
dolphin --name dolphin-scratchpad
```
1. You should be able to assign a global shortcut to toggle the visibility of this dolphin instance

