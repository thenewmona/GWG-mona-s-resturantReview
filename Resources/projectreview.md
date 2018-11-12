Requires Changes
2 SPECIFICATIONS REQUIRE CHANGES
Hi Udacian
Great first attempt :fire:

There are some bugs in your application I had mentioned in your code reviews. Please find them and make all the changes :D

If you get stuck feel free to reach out to your mentors in study group.

Looking for your next submission :smiley:

Best of luck :+1:

Keep Learning and Stay Udacian
:udacious:

Responsive Design
All content is responsive and displays on a range of display sizes.

Content should make use of available screen real estate and should display correctly at all screen sizes.

An image's associated title and text renders next to the image in all viewport sizes.

:arrow_right: Great first attempt here:clap: You are almost there. But there is something on which you have to work on. Take a look at this gif and screenshot below:point_down:

h12.gif

There is a lot of horizontal scroll on both of the pages of your application. Which we have to remove from the application.

Suggestions:-
Try to adjust the font-size of anchor tag in your navbar and width of the footer in both the pages:smiley:

Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.

:white_check_mark: Images in the site are sized appropriate to the viewport :clap:

On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

:white_check_mark: page has all required details visible :+1:

Accessibility
All content-related images include appropriate alternate text that clearly describes the content of the image.

:white_check_mark: The alt attribute provides alternative information for an image if a user for some reason cannot view it. Great work associating alt attribute with every image tag. :star2:

Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

:white_check_mark: Focus is appropriately managed. All the key elements are accessible by press tab key. :tada:

Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

:white_check_mark: Great work with adding the role and label to the tags:clap:

Offline Availability
When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

:arrow_right: You are doing good. But there are some issues with the implementation of the service worker. When I try to refresh the page in the offline mode all the content gets vanished. Take a look at this:point_down:

h1.gif

Hint:-
Take a look at these links. They would tell you the implementation of the service worker from the very beginning

https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
https://developers.google.com/web/fundamentals/primers/service-workers/