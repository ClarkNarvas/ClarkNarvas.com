---
layout: clarkpost
title:  "Android without Google Play Services: The No Google Experiment"
date:   2020-01-19 11:12:38 +0000
featured-image: /assets/blogposts/TheNoGoogleExperiment/Thumbnail.png
thumbnail-alt: Bunch of bordered phones. Centered phone has a broken Google logo
tags: Digital
description: Do you want to have real privacy? NoGoogling is the way to go.
---

I’ve previously wrote about scrapping reliance on Google services by changing my app store, overhauling core services and using alternatives to apps. These all lowered the amount of data I send to Google and the chances of robots ever recognizing me during the next robotic invasion 🤖. 

<iframe src="https://giphy.com/embed/A8NNZlVuA1LoY" width="100%" height="276" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

However, like I said at the end of that article, I never really ditched Google; I still used Android Messages, Google Pay and Google Photos. That is still a lot of services that are sending my data to their servers.

I decided to take the opportunity of the end of my phone contract and the start of a new year not just to completely scrap those, but to also ditch Google Play Services completely.

What could go wrong? 

{% include components/legacy/heading.html text="The technical jargon" %}

<iframe src="https://giphy.com/embed/5aY2MOdRZ2y8kQfIHH" width="100%" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

The first hurdle was probably the one where I had the most anxiety passing through. Before this, I never really had much knowledge into installing ROM’s, custom recoveries and rooting. I had enough customization and power from my phone, why would I ever need to!

Unfortunately, The only way I could completely remove Google Services was to tweak my phone, so I took a breather, went on YouTube found a tutorial on how to root my phone.

Everything was going well; I unlocked my bootloader, I flashed TWRP and started the process of rooting, that’s when everything started going downhill.

The startup symbol looped and looped for 20 minutes straight – I anxiously started going onto as many articles and resources as I could find to try and fix my boot-looping mess of a phone. None of them helped, so I went for my last case scenario: Discord.

I was lucky, In one of my nerdy chat servers, there was someone who knew how to root. It was a simple fix, I just wiped everything off my phone.

Instead of re-flashing Oxygen OS, the OnePlus skin on top of Android, I decided to use my bets on an unofficial flavor of Android… Lineage OS.

{% include components/legacy/heading.html text="Lineage OS + MicroG" %}

{% include components/legacy/image.html alt="LineageOS for MicroG website" url="/assets/blogposts/TheNoGoogleExperiment/Lineage-OS-for-MicroG-768x381.png" %}

Okay, so can I just mention how much I love Lineage OS?

It’s open source and made by contributors from around the world and has some useful privacy features, as well as customization. This either could be because of the ROM or the lack of Google Services but my phone feels so much faster now.

The ROM I installed wasn’t an official build though, I installed a fork called LineageOS for MicroG; MicroG is really just Google Play Services without the ‘Google’ in, it allows me to run apps that use Google Services with ways to limit the amount of data that gets sent through.

Most of the implementation works flawlessly, however I’ve had some trouble with Google SafetyNet which has blocked me from using some apps – I tried using Magisk Hide to fix this, but I had no luck.

Most apps also use Google Cloud Messages to send their notifications through instead of going directly to the phone, so I didn’t get as many frequent notifications.

I wish apps didn’t use so many proprietary Google API’s, MicroG wouldn’t of been needed and this project would probably be less of a pain.

{% include components/legacy/heading.html text="My Replacements" %}

I’m gonna clarify that my phone isn’t completely a open source, independent phone as my difficulties with Google SafetyNet and Cloud Messages has shown. I still use some proprietary software as it’s completely impossible to replace all apps, but for those I replaced, as follows:

YouTube is replaced with NewPipe, a version of the YouTube app that has no ads, tracking, uses less battery and has the ability to download videos.

Google Play Store is replaced with F-Droid mainly, however when I have to get Google Play apps I use Aurora Store to download them.

Google Chrome is replaced with Fennec F-Droid, a more open source version of Firefox for Android.

Google Keyboard is replaced with Flesky. While you might say it’s not open source, it processes everything you type on device and not through servers. If you really want an open source keyboard then use AnySoftKeyboard from F-Droid

Google Contacts/Calendar replaced with DAVx5 which connects with my locally hosted NextCloud server. If you wanna know more about it then please read my last article.

Google Maps was replaced with Magic Earth. It’s not an Open Source alternative, but it uses OpenStreetMaps data.

Everything else like the Mail app have been replaced with its Lineage OS counterparts.

{% include components/legacy/heading.html text="Should you do it?" %}

Are you an Android user that’s experienced and knows your custom recoveries to your custom ROM’s? Yes.

But if you’re not, This experiment isn’t for you. You could be risking bricking your entire phone and I have found the entire experience quite stressful.

When the European Commission released a report on Google’s influence on the entire operating system, which is supposed to be open source, and how it was anti-competitive, I didn’t buy it.

Now that I’ve actually done this experiment, it’s really shocking on how much Google has a grip on Android. Essential services are reliant on Google Play Services such as Emergency Location Services and Google SafetyNet has stopped me from using certain apps.

Why should we be forced into giving data to big tech companies that mine our data? We shouldn’t have to go through so many steps to do this, especially in times where we’re increasingly reliant on phones and technology in our every day lives to the point you could call them surveillance devices.

You can agree with me or disagree with me, but no one would ever give their address, their location, their phone number, their sexuality, their nudes and their bank information with a heavy-suited business man in the street for the sake of ‘personalisation’ of services, so why should we let big advertising companies have this information?

We paid for these devices. We should have the control. 