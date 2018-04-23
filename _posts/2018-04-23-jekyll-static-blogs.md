---
title: 3 Tips to Creating a Successful Blog with Jekyll
date: 2018-04-23 8:45
image: https://camo.githubusercontent.com/820c4eeae7e0e934ea25d23e8e72f2b1f43b4088/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f31323733322f313536363638352f31353761353632652d353039332d313165332d383939392d3037326262633231636334352e706e67
lead: "Benefits of using Jekyll's static site generator." 
subtitle: Building, hosting, and securing your blog
---
#### Jekyll Static Site Generator:
 
I had prior experience with blogging platforms, such as Blogger and WordPress, but the recent launch of [Stahlwalker.org]( https://stahlwalker.org/) was my first attempt and creating a blog from scratch and using Jekyll helped. 3 tips to know before attempting to use Jekyll.

1.  Be familiar with the command line as you will use it to run your server and if you don’t have ruby gems installed on your computer will have to do so. After Jekyll is installed there are a number of tutorials on YouTube that can help guide you through, but the one that I found to be the most helpful is on Udemy, called Jekyll: make fast, secure sties and blogs with Jekyll. This course has 29 lectures under 3 hours of material and afterwards you will have a working Jekyll blog. 

2.  Have a GitHub account. One of the best features with Jekyll is its integration with GitHub. Since, Jekyll works with GitHub you can publish your blog for free instead of going through Digital Ocean, Amazon S3, or Heroku. 

3.  Additionally, Cloudflare works with GitHub pages and Jekyll in order to help make domains secure. Creating an account with Cloudflare and then changing the DNS of the custom domain that you purchased to reflect GitHub’s DNS can turn any "Username<span></span>.github.<span></span>io/appName" into a secure website. I spent a lot of time looking into SSL keys through Digital Ocean and Let’s Encrypt only to find this simpler solution with Cloudflare. The best part about it, it’s free. With Digital Ocean, I was creating droplets that would charge roughly 10 cents a day on top of a $5 a month fee.  It also required way more knowledge of the command line because it integrated Nginx, but that is a tale for another time. Long story short, Cloudflare integrated with GitHub and Jekyll can take your blog post one step further than the initial publishing feature GitHub has to offer. Sure, there are ways of publishing with a CNAME on GitHub, however you’ll notice your site isn’t secure and you have an “!” prior to your URL. ![Some Title]( https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGwja5X_u_swFYdUwFGqS8RtjR5Kh_B1mpRgv_oVEtD7K0kMZsQ){:style="float: right;margin-left: 7px;margin-top: 7px; position: relative"}{:class="img-responsive"} With the way web servers are cracking down on sites that are not secure, it’s important to make sure yours is from the beginning. Imagine all your hard work building a blog, publishing content for 2-3 years, only for Chrome to shut it down or require you purchasing an SSL Key for $75 a year. Save yourself the hassle and get it through Cloudflare, protect your site right out of the gates. 

Here are a couple links to help get you started on creating your first Jekyll Blog.

* [Jekyll Install and Walkthrough]( https://jekyllrb.com/)
* [Github](https://github.com/)
* [Cloudflare]( https://www.cloudflare.com/)
* [Udemy Jekyll Tutorial](https://www.udemy.com/static-website-generator-fast-secure-sites-blogs-with-jekyll/learn/v4/overview)

&nbsp;
#### I hope this was helpful and feel free to comment with suggestions or questions.  

### **<span style="color:rgb(254, 57, 30)">-Man of Stahl</span>**
