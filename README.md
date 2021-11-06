# React Portfolio website

Designed by - [Zach Beckwith](https://github.com/ZBeckwith6)

Hello everyone, welcome to my Front-End Web Developer Portfolio! My goal with creating this project is to have an easy-to-use application to showcase all of my projects, new and old. Without having a CS degree, I felt that a portfolio site would be essential in pursuing my web dev aspirations.

My application shows each individual project that I've worked on and can lead the user to the site itself (if it was deployed) or to their Github repositories. The application also gives insight into my competencies with different web development languages, my personal background and a contact form for whoever would like to reach out to me.

The main technology I used for this application was React. I chose React because it seems like a majority of popular applications today are built using React, and a Portfolio Site would benefit greatly from using Reacts many features. Some of the features I incorporated are JSX, React DOM, State Management and Components/Props. Within React I installed EmailJS in order to have forms submitted to me via email without needing a Back-End language for the application. I also used Swiper (to allow the user to swipe through my projects) and React Icons.

As to be expected with creating your first couple applications in a new language, there were many challenges I faced during its creation. Over time these challenges became great learning experiences and I was eventually able to overcome all of them. My first big challenge was implementing project items in my Home and Projects sections of my application. Once I figured out their structure I wasn't able to get their buttons to link with outside URL's. After researching the issue I learned that it was because I was using Links's for the buttons which isn't compatible with outside URL's. Links's are used for navigating throughout the application, so eventually I replaced them with a href's. The next major issue I ran into was implementing EmailJS. I had already created the form on my Contact page, so I had to find a way to add the EmailJS functionality to the form in order to get it to send me emails of submitted forms. Once I was able to add it without changing the format of my form, I had issues with getting it to actually send me email submissions. After tinkering with the sendForm() function and the field names of the form, I was finally able to get the form to work how it was intended.

Now that this application is up and running, I'd like to improve its performance as time goes on. At the moment a few assets like pictures or styles will take a bit longer to load than I would like them to. I would also like to implement an API of some sort, although I'm unsure at the moment which API that would be.

Thats about it, thank you for checking out my Portfolio repository! If you have any questions or would like to discuss potential employment feel free to email me at zbeckwith6@gmail.com
