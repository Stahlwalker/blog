---
title: One Small Step for Man…
date: 2019-03-16 8:00
image: /img/moon.jpg
lead: "Operating software updates that move you backwards" 
subtitle: It's only a matter of time
category: Tech
tags: macOS updates stack-overflow mojave jekyll
---
#### Hold your breath we have an OS update… 
Or at least that is how it feels for me. As a new programmer, working with the terminal can be challenging. Take in consideration purchasing and/or updating to a new computer. Giving up all the installations from a previous computer can make anyone go crazy, even with time machine backups. 

As you can see, I’m talking about mac users because that is my personal preference. I’m sure there are steps with other operating systems to ensure your data transfers over. Nevertheless, you feel as though you are starting from scratch when opening up the terminal. The real tricky part is when your computer has an update. In the time that I’ve been coding I’ve gone through a handful with Apple and the most recent being Mojave. 

![Div](/img/mojave.jpeg){:style="float: right;margin-left: 7px;margin-top: 7px; position: relative"}{:class="img-responsive"}

Every time I upgrade, I feel as though I run this risk of losing my ability to utilize this site. Working with Jekyll and Ruby Gems come with risks and rewards. I love the use of Jekyll’s static blog site however every time there is a new update, the gems require updating as well, all of which leaves me wondering if there is an expiration date on [Stahlwalker.org]( https://stahlwalker.org/). If you are wondering where I have been the past couple months it’s had a lot to do with complications between Jekyll, Mojave and GitHub. The first error I had was getting Jekyll to preview on localhost. Once I was able to preview my site to make changes, I was unable to push the code through to GitHub. I was dealing with a symbolic link issue and GitHub was asking me to remove the code from my site repository, however my editor would not allow me to delete it. So, what did I do to get the ball rolling again?

Like most programmers it started with Google, however after days of searching I had to do what I was taught as web developers and take a step back. So, a couple weeks went by, my reminder to fix the error kept getting pushed further and further down the line. The thought process that one day this site might deliver a 404 error ![Div](/img/404.png){:style="float: right;margin-left: 7px;margin-top: 7px; position: relative"}{:class="img-responsive"} to all visitors because I either crashed it downloading someone’s recommendation via Stack Overflow or simply zero activity was rapidly keeping me up at night. After waiting and revisiting the issue, I resorted to putting my faith in Google again and I was able to come to the solution. I needed to add a .gitignore file to ignore my vendor files. This would avoid pushing the symbolic link to GitHub and sure enough **IT WORKED**. Hallelujah I was back up and running again.

Still the notion of until next time lingers in the back of my mind because with all software comes updates and these major operating software updates are ticking time bombs. So, don’t be surprised, if you see me go months and months at end without a post. You’ll know the root cause if you start seeing the 404 error. That or it means I did it, I finally broke my site, at this point I’m beginning to think it’s inevitable. The positive outlook on this is with Google you can always find a way. I’d like to thank all the better programmers out there for saving me over and over again, I don’t know where I would be without your help. Thank you, Stack Overflow, and a special thank you to the developer community.



<br>

##### Related Resources 
* [Stack Overflow](https://stackoverflow.com/)
* [GitHub](https://github.com/)
* [Jekyll & macOS](https://jekyllrb.com/docs/installation/macos/)

 ![HERE](/img/stackoverflow.png){:style="float: center;margin-left: 7px;margin-top: 7px; position: relative"}{:class="img-responsive"}

&nbsp;
#### I hope this was helpful and feel free to comment with suggestions or questions.  

### **<span style="color:rgb(50, 126, 235); font-family: 'Bradley Hand';">- Man of Stahl</span>**

