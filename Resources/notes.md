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


