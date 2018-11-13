10/13/2018

https://www.youtube.com/watch?v=dNFgRUD2w68&vl=en

# Python 
=======================
https://code.visualstudio.com/docs/languages/python
https://code.visualstudio.com/docs/editor/command-line
https://stackoverflow.com/questions/29987840/how-to-execute-python-code-from-within-visual-studio-code
https://docs.python.org/3/library/http.server.html
https://www.youtube.com/watch?v=vyCboBjK4us
[Learn Python | VS Code | Python Hello World Tutorial](https://www.youtube.com/watch?v=WdGyfCceCvM)

# Web Server 

[Node js Tutorial - Setup Web Server in 3 Minutes with http-server Module](https://www.youtube.com/watch?v=oa9m8321_nw)

[How To Make A Simple Python Web Server](https://www.youtube.com/watch?v=vyCboBjK4us)


talked with Linda and she says that since I am using VSC I do not need a python server just change
the port to 5500 , but make sure that I change it before turning it in 

`static get DATABASE_URL() {
   const port = 5500 // Change this to your server port
   return `http://localhost:${port}/data/restaurants.json`;
 }`

 10/14/2018

 [Ryan's walkthrough ](https://www.youtube.com/watch?v=ag_jBDFAL0U&feature=youtu.be)

 learned about api's 

 #Google API script 
 ====================

 https://developers.google.com/maps/documentation/javascript/tutorial
 `<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  type="text/javascript"></script>`

  Finally got my maps to show, and my python server is up and running Yippee!!!!

  10/16/2018 
  Fired up my server and now I have no maps, just the pins 
  not sure what is going on 
  Getting ready to do the walkthrough with Carlos , so maybe I can get some help there 

  10/17/2018

  [Google Maps JavaScript API Tutorial - Brad Traversy](https://www.youtube.com/watch?v=Zxf1mnP5zcw&t=14s)
  [Google Geocode API & JavaScript Tutorial - Brad Traversy](https://www.youtube.com/watch?v=pRiQeo17u6c)updated

Finally fixed my repo, got my api key, but maps are not showing
The restaurants appear in the drop down
I am getting the following error message 
`2restaurant_info.js:17 No restaurant id in URL`
https://github.com/thenewmona/GWG-mona-s-resturantReview

finally got rid of the error message, map is showing following this walkthrough 
[MWS Restaurant Reviews Project](https://alexandroperez.github.io/mws-walkthrough/?1.1.introduction) courtsey of `Jerome Wilson (Jay) FEND`

10/21/2018
[list-style-position](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position) - how to style stuff inside a class or div 

10/24/2018
still trying to get my media queries to work 
Think I have figured out the issue 

[What is the difference between “screen” and “only screen” in media queries?](https://stackoverflow.com/questions/8549529/what-is-the-difference-between-screen-and-only-screen-in-media-queries)

Got the media queries to finally work , totally forgot about specificity 

10/27/2018 danny helped me with my organization of my files 

  working on CSS 
  https://www.w3schools.com/cssref/pr_font_weight.asp - 
  500 = defines the thickness of the text 
  bold = thickness 

  working on accessibility 
  .skip links 
  https://support.siteimprove.com/hc/en-gb/articles/115003457351-How-skip-links-can-help-with-website-accessibility
  https://axesslab.com/skip-links/

  css calc = https://www.w3schools.com/cssref/func_calc.asp

  overflow = https://www.w3schools.com/cssref/pr_pos_overflow.asp
  css overflow = https://www.dyclassroom.com/css/css-overflow

10/30/2018
working on aria, responsiveness, and service workers 
need to move the footer, it is in the center of the page and reviews , needs to be at the bottom of the page 
[zindex](https://www.w3schools.com/cssref/pr_pos_z-index.asp)

[what is an api](https://medium.freecodecamp.org/what-is-an-api-in-english-please-9c4dbf707b3e)

[What are api's and how do they work](https://blogs.mulesoft.com/biz/tech-ramblings-biz/what-are-apis-how-do-apis-work/)

[ARIA](https://www.youtube.com/watch?v=o4xHfi4t9S0&list=PLWjCJDeWfDdcEtSnqq_iGLKGA_H_3o3y7)

[ARIA - skip links](https://www.youtube.com/watch?v=UnEItq289lU&index=5&list=PLWjCJDeWfDdcEtSnqq_iGLKGA_H_3o3y7)

[ARIA tools](https://www.youtube.com/watch?v=xpqPctbDhnc&list=PLWjCJDeWfDdcEtSnqq_iGLKGA_H_3o3y7&index=6)

[Web Developer Tool Bar](https://chrispederick.com/work/web-developer/)

[Adding a service worker](https://developers.google.com/web/fundamentals/codelabs/offline/)

# Slack conversation 
Good morning everyone, Trying to get back in the game while on vacation
I have a question for the accesiblity
how many of you used `skip` aka skip link for accessibilty
I was reading this article and there are some issues
Just wondering if anyone else used them, or had issues with them
https://axesslab.com/skip-links/
Thanks
Axess Lab
Your skip links are broken - Axess Lab
Many websites have an accessibility feature called skip links that help some users navigate the site. However, there’s a problem with basically all skip links on mobile devices, which hurts your site’s accessibility instead of improving it. What are skip links? Skip links are a common accessibility feature on websites. They are simply shortcuts to …
Jun 21st at 4:16 AM
 


3 replies
Doug Brown [Project Coach] [27 minutes ago]
There is no real need to use a skip link in any of the projects. One less thing you need to worry about.  :slightly_smiling_face:


AB3D [24 minutes ago]
I have not used skip.  I just got feedback on my first submission.  I need to make some corrections but I was able to get by on the accessibility features using Tab Index, 'Alt'(for images) and I need to add an 'aria role' and label' to few places per the feedback.


Also sent to the channel
thenewmona {FEND}Michigan [< 1 minute ago]
thanks for the info @Doug Brown [Project Coach] and @Ahmed Abbas
need to look up Tab Index

11/3/2018
Added ARIA labels to restaurant.html need to figure out why I have this at the top of my project 
`<<<<<<< HEAD ======= >>>>>>> 6e91597ebdf43ee51c604eccd0c1264467e97984`

thenewmona {FEND}Michigan [1 day ago]
good morning everyone, I just added my ARIA to my restaurant.html now at the top of the screen I have this
`<<<<<<< HEAD ======= >>>>>>> 6e91597ebdf43ee51c604eccd0c1264467e97984`
https://snag.gy/NGS25B.jpg
I have searched my HTML, thinking maybe I commented something, I can not figure out where this is coming from
Has anyone else have this before
Thanks (edited)


Donna.L [24 hours ago]
Do you want to share you repo?


dannygsmith [FEND] OKC [23 hours ago]
It came from giddy-up-and-git.  When you ran it, it didn't merge cleanly, so you need to edit it and keep the change you want.  See https://stackoverflow.com/questions/161813/how-to-resolve-merge-conflicts-in-git/7589612#7589612
Stack Overflow
How to resolve merge conflicts in Git
Is there a good way to explain how to resolve merge conflicts in Git?
 


Also sent to the channel
thenewmona {FEND}Michigan [13 hours ago]
@dannygsmith [FEND] OKC thanks for the info, @gina812[FEND] was helping me with this and we kinda figured that out, just not sure why it is messing with my HTML file, and I only have one branch so not sure where the merge conflict is coming from, but now that I know that it is from GIT I can clean it up

11/4/2018

Decided to do an audit on my page to see where I was with the project, should have done this from the beginning so that I had a progress baseline

11/5/2018

updating ARIA map content using the following [aria-hidden (state)](https://www.w3.org/WAI/PF/aria/states_and_properties#aria-hidden)


11/6/2018 not having the same issues at work with the breadcrumb as I do at home 
https://snag.gy/KgeqTr.jpg not sure what is going on, need to work on this, but my picture is looking funny now though 

11/06/2018
OK I am about ready to lose my mind here people
I stayed up til 2am this morning trying to fix an issue, and ended up breaking more of my project
I get into work on a different computer and the issue that I was working on all last night does not exist
Thinking that maybe something did not sync properly, I went to Github to see what it shows, It is also totally different

This is what Github is showing my project to look like
https://snag.gy/ZaOc03.jpg

This is what it looks like on my liveserver in VSC
https://snag.gy/fQ1SMK.jpg

This is the error that I was trying to fix last night
https://snag.gy/naEF6s.jpg


Has anyone had this issue before?
I feel like I am going around in circles, and now I don't even know what to work on because I don't know what is a real issue and what is not
Any thoughts, ideas, and help is greatly appreciated

working on service worker getting this error message 
Service Worker Supported
index.html:82 Live reload enabled.
leaflet.js:5 [Intervention] Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: https://fonts.gstatic.com/s/sofia/v6/8QIHdirahM3j_su5uI0.woff2
register-sw.js:8 Service Worker: Registered
A bad HTTP response code (404) was received when fetching the script.
Failed to load resource: net::ERR_INVALID_RESPONSE
index.html:1 Uncaught (in promise) TypeError: Failed to register a ServiceWorker: A bad HTTP response code (404) was received when fetching the script.
favicon.ico:1 GET http://127.0.0.1:5500/favicon.ico 404 (Not Found)
Service Worker Supported
A bad HTTP response code (404) was received when fetching the script.
Failed to load resource: net::ERR_INVALID_RESPONSE
register-sw.js:9 Couldn't register service worker... 
 TypeError: Failed to register a ServiceWorker: A bad HTTP response code (404) was received when fetching the script.

 11/7/2018
 # slack notes
 
 Did you get the service worker question answered? See that the path for the service worker file is in the same path for the main.js As written its two aways its current path.

 * TODO Need to work on these PWA issues 

 Progressive Web App
These checks validate the aspects of a Progressive Web App, as specified by the baseline PWA Checklist.
1
Does not respond with a 200 when offline

2
User will not be prompted to Install the Web App
Failures: No manifest was fetched, Site does not register a service worker.

3
Does not redirect HTTP traffic to HTTPS

4
Does not have a <meta name="viewport"> tag with width or initial-scale
No viewport meta tag found

5
Does not register a service worker

6
Is not configured for a custom splash screen
Failures: No manifest was fetched.

7
Address bar does not match brand colors
Failures: No manifest was fetched, No `<meta name="theme-color">` tag found.

8
Content is not sized correctly for the viewport
The viewport size is 2400px, whereas the window size is 1920px.

11/8/2018

sw.js:51 Uncaught (in promise) ReferenceError: map is not defined
    at sw.js:51

   My PWA  audit is up to 62 still needs some work 

    https://snag.gy/0uMdh8.jpg


    

# Progressive Web App errors

*These checks validate the aspects of a Progressive Web App, as specified by the baseline PWA Checklist.*


1
User will not be prompted to Install the Web App
Failures: No manifest was fetched, Service worker does not successfully serve the manifest's start_url, No usable web app manifest found on page.
Browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/install-prompt).

2
If you've already set up HTTPS, make sure that you redirect all HTTP traffic to HTTPS. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http-redirects-to-https).

3
Does not have a <meta name="viewport"> tag with width or initial-scale
No viewport meta tag found 
Add a viewport meta tag to optimize your app for mobile screens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/has-viewport-meta-tag)

https://developers.google.com/web/tools/lighthouse/audits/install-prompt
4
Is not configured for a custom splash screen
Failures: No manifest was fetched.
A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/custom-splash-screen).

5
Address bar does not match brand colors
Failures: No manifest was fetched, No `<meta name="theme-color">` tag found.
The browser address bar can be themed to match your site. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/address-bar)

6
Content is not sized correctly for the viewport
The viewport size is 2880px, whereas the window size is 1920px.
If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/content-sized-correctly-for-viewport)

[Solving the Lighthouse 'content is not sized correctly for the viewport' Failed Test](https://love2dev.com/blog/content-is-not-sized-correctly-for-the-viewport/)

[Google devtools service worker fix](https://docs.google.com/presentation/d/1T_LHDAa7QXdNS7icNXz80d5KebDerqUdGZpg7jafLnw/edit#slide=id.g3c7f3ec099_0_2)

[Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

*error message* Uncaught (in promise) TypeError: Request failed

11/9/2018

one step forward 3 steps back, have no idea what is going on this morning with this project 
doing to much troubleshooting, and just keep messing things up 
Nothing will load now 

## Error messages in the console

sw.js:65 TypeError: Failed to fetch
(anonymous) @ sw.js:65
Promise.catch (async)
(anonymous) @ sw.js:64
Promise.then (async)
(anonymous) @ sw.js:49

The FetchEvent for "https://pkg.com/leaflet@1.3.1/dist/leaflet.js" resulted in a network error response: an object that was not a Response was passed to respondWith().
Promise.then (async)
(anonymous) @ sw.js:48

index.html:41 GET https://pkg.com/leaflet@1.3.1/dist/leaflet.js net::ERR_FAILED
main.js:75 Uncaught ReferenceError: L is not defined
    at initMap (main.js:75)
    at HTMLDocument.<anonymous> (main.js:11)
initMap @ main.js:75
(anonymous) @ main.js:11

register-sw.js:9 ServiceWorker registration successful with scope:  http://127.0.0.1:5500/

index.html:76 WebSocket connection to 'ws://127.0.0.1:5500/index.html/ws' failed: Error in connection establishment: net::ERR_CONNECTION_REFUSED
(anonymous) @ index.html:76
(anonymous) @ index.html:85

favicon.ico:1 GET http://127.0.0.1:5500/favicon.ico net::ERR_CONNECTION_REFUSED

An unknown error occurred when fetching the script.

Failed to load resource: net::ERR_CONNECTION_REFUSED

with  the help of Julian figured out that I was having a caching issue with google 

# color scheme accesibilty
Therese Yason (FEND) [8:57 AM]
Hi, Mona! I saw a sample of your Restaurant Reviews Project on Slack. You might want to reconsider your purple and green color combo because they might be of the same intensity and value. I'm not colorblind but a colorblind or someone with color deficiency might perceive both colors as one shade of grey.


thenewmona {FEND}Michigan [9:08 AM]
Thanks for the info Therese
I was thinking about when I was looking over it, especially since I also went with an off white, because the white that they had was so bright it actaully hurt my eyes

Therese Yason (FEND) [9:12 AM]
My husband's brothers are colorblind or have red-green deficiency so I kind of know how it is. You can reduce the value of the purple to a pale purple, though, so you can still keep the color scheme intact.

11/10/2018

Worked with Sonam and Danny on my service worker and still can not figure out why it won't work
Going to submit to see what the reviewer says

11/12/2018

Redid service worker with Doug Brown's tutorial and it is working offline now 
need to fix the viewport issue so that I can resubmit 

test SW at work and I am getting this error message UGHHHHH

7swDB.js:47 cached undefined

register-sw.js:9 ServiceWorker registration successful with scope:  http://127.0.0.1:5500/

favicon.ico:1 GET http://127.0.0.1:5500/favicon.ico net::ERR_INTERNET_DISCONNECTED

swDB.js:37 caches install failed TypeError: Failed to fetch

Back to the drawing board

# per audit 
Text is invisible while webfonts are loading
Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. Learn more.

[@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)

## Slack with Juwana 
--------------------
JZerman {FEND} [6:09 PM]
The service worker was working for me but the map is missing. The markers are there but no map

thenewmona {FEND}Michigan [6:35 PM]
On my repo?
this is really getting anoying
I just got home, pulled it up, map is showing on my side
I do have the port set at 5500 by the way, because I am using VSClive server
not sure if that makes a difference or not
still works offline at home, must be something at work with the network
oh well I am going to work on the viewport, get that fixed and resubmit this thing
thanks for checking

JZerman {FEND} [6:44 PM]
no I have the right port I had to figure that out when I cloned it a few weeks ago

thenewmona {FEND}Michigan [6:46 PM]
are there any errors in the console, funny I have tons of errors, but it is working here on my side
https://snag.gy/OpuzCf.jpg
https://snag.gy/OpuzCf.jpg

JZerman {FEND} [6:48 PM]
Yeah there were some. Let me pull it back up

thenewmona {FEND}Michigan [6:49 PM]
great testing on IE, and there is nothing there :disappointed:

JZerman {FEND} [6:53 PM]
Pasted image at 2018-11-12, 6:53 PM 

that's the top for me
Pasted image at 2018-11-12, 6:55 PM 


thenewmona {FEND}Michigan [6:55 PM]
that's my old colors, it should be purple? WTF
I'm running it in IE right now, and the map doesn't show on this end, and IE is giving me all kinds of weird errors
Saying I have extra body and html tags
No that one is like a month old LOL
let me make sure you have the right repo, I had to create a new repo LOL
https://github.com/thenewmona/GWG-monas-resturantReview
GitHub
thenewmona/GWG-monas-resturantReview
Working file fixed with Danny's help . Contribute to thenewmona/GWG-monas-resturantReview development by creating an account on GitHub.
I have like 4 repo's for this project, I have started this thing so many times

JZerman {FEND} [6:57 PM]
I have two...I thought this might have been the updated one....That might be the problem for me

thenewmona {FEND}Michigan [6:57 PM]
have you ever worked with IE?
can't figure out how to see the service worker stuff

JZerman {FEND} [7:00 PM]
no. send me the right repo and I'll look....we might can figure it out. I deleted the other two repos

thenewmona {FEND}Michigan [7:00 PM]
I just sent the repo that I am working on
https://github.com/thenewmona/GWG-monas-resturantReview
GitHub
thenewmona/GWG-monas-resturantReview
Working file fixed with Danny's help . Contribute to thenewmona/GWG-monas-resturantReview development by creating an account on GitHub.

thenewmona {FEND}Michigan [7:05 PM]
I'm installing FF to see how it renders on FF
everything shows up in firefox

JZerman {FEND} [7:10 PM]
oh wow. I'm deleting the repos I had. I downloading that one and it's showing blue still for the headers

thenewmona {FEND}Michigan [7:10 PM]
did you hard clear your cache ,
found out that I had to do that, spent the whole week working on old code, thinking my stuff was still not working
but I don't know how to use FF either LOL

JZerman {FEND} [7:12 PM]
yeah I learned that the hard way too

thenewmona {FEND}Michigan [7:15 PM]
firefox the service worker stuff is on a different page
Really

JZerman {FEND} [7:26 PM]
alright got it running in chrome....had to break out my old command line skills. I've been using github desktop and it just wasn't working

thenewmona {FEND}Michigan [7:26 PM]
LOL

JZerman {FEND} [7:26 PM]
Everything is showing no console errors but on the service worker it shows an error.....let me screen print it

thenewmona {FEND}Michigan [7:26 PM]
something weird is going on
I am working on some of the suggestions that he reviewer gave me, but none of my changes are showing up

JZerman {FEND} [7:27 PM]
:5500/swDB.js:44
Full error: Uncaught TypeError: Cannot read property 'then' of undefined
   at :5500/swDB.js:44

thenewmona {FEND}Michigan [7:27 PM]
He recommend that I change the font size in my nav bar
I didn't see a change so I changed the color and nothing is happening

JZerman {FEND} [7:28 PM]
Pasted image at 2018-11-12, 7:28 PM 


thenewmona {FEND}Michigan [7:29 PM]
does it work offline for you?

JZerman {FEND} [7:33 PM]
I get an error internet disconnected when I try to go offline

thenewmona {FEND}Michigan [7:34 PM]
I am totally lost now, three different computers, three different browsers , two different user, all different errors
I am going to reboot my system real quick hopefully I will get an accurate picture of what is going on
thanks

JZerman {FEND} [7:39 PM]
I reloaded everything and errors are gone on service worker. no errors on either page. I'm going to try offline. That maybe the only thing not working
EVERYTHINGS WORKING.....OFFLINE TOO

thenewmona {FEND}Michigan [7:41 PM]
great something is working in my favor :slightly_smiling_face:
I rebooted my system, but I am still not seeing the changes that I made in the CSS

JZerman {FEND} [7:42 PM]
It must be just finicky for some reason....put those media queries back in and submit it

thenewmona {FEND}Michigan [7:43 PM]
I am still having issues with my responsiveness, I committed them out to rule them out as the culprit for issues

JZerman {FEND} [7:43 PM]
The only thing running over on dev tools responsive is the heading. I don't know why they said to change the font on the nav bar

thenewmona {FEND}Michigan [7:44 PM]
There is a lot of horizontal scroll on both of the pages of your application. Which we have to remove from the application.

Suggestions:-
Try to adjust the font-size of anchor tag in your navbar and width of the footer in both the pages:smiley:
this is what he/she said
my changes are finally showing up, not sure what I did LOL

JZerman {FEND} [7:45 PM]
I just opened the folder. I just spun up the server and never opened it in VSCode
is the scroll gone?

thenewmona {FEND}Michigan [7:46 PM]
when I run an audit, this is what the audit says
Content is not sized correctly for the viewport
The viewport size is 583px, whereas the window size is 412px.
lol I have two font sizes for  the nav h1 a

JZerman {FEND} [7:49 PM]
one would override the other :grinning:

thenewmona {FEND}Michigan [7:50 PM]
yeah just fixed that, now the footer, then I will commit and push so you can see what it looks like on your end
thank you so much
I see what they are talking about now, just trying to figure out how to fix it
https://snag.gy/Xuzx7L.jpg


JZerman {FEND} [8:10 PM]
some of those CSS files may be overlapping.....That's what I'm wondering

thenewmona {FEND}Michigan [8:11 PM]
but I am only calling one CSS file in my html
ok, I have moved the other CSS files totally out of the project, right now I am going through each line of my CSS to make sure that I have no doubles of everything
Message Input

Message JZerman {FEND} 