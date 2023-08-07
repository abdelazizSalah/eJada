---
Name: Abdelaziz Salah
Title: Searching Assignment
Delivered To: Eng. Ethraa
Date: 7/8/2023
---


# What is Tableau?
* Tableau is a tool used mainly for visualizing the data. 
* it allows us to insert new raw data
* and apply some analysis on it. 
* in order to generate some meaningful reports and can take some decisions based on it.
* it is a tool which we can install and connect it to our dynamics 365 environment.
> reference: https://docs.devart.com/odbc/dynamics/tableau.htm
# what is the IFRAME?
* it is an acronym for Inline Frame.
* it is an element in the HTML Code. 
* its main role is to display another HTML document inside the current one.
* mainly used for ads and applying web analytics. 
* When the web browser encounters an iframe element, it creates a new HTML document environment to load the content within. It takes the code from the referenced src or srcdoc and renders it as its own website that is then put entirely within the parent browsing page. It is called an inline frame because to the user it is all one web page.

### How can we use it in dynamics 365?
* There are sometimes, when we need to embed or to insert a data or content into the form from another pages. 
* so that exactly what IFRAME does. 
* so we can use it to display contents from another websites into our forms.
* to use it we can use the IFRAME 
  * we can add it from the ui.controls namespace.
  * which we will find it using name (IFRAME_test), which is a given name for the IFRAME.
  * then there are some parameters you can read about them in the microsoft documentation, which I will put it in the references.
  * after that we can call a function called setSrc() which takes the url of the page we want to display in the IFRAME.


> references:
>1. https://www.techtarget.com/whatis/definition/IFrame-Inline-Frame
>2. https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/use-iframe-and-web-resource-controls-on-a-form?view=op-9-1


# What is the Interactive dashboards?
* It is an entity specific dashboard.
* which means that we can design a dashboard for each specific entity, rather than using the out-of-the-box dashboard (which are the built in dashboards), which are just defined for certain entities in the systems such as the Account, Activities and so on.
* it has mainly two types: 
  * Single Stream:
    * Stream in general is a flow of data.
    * which we can consider it as alias for the view in the system.
    * so single stream means that we can only display one view in the dashboard.
  * Multiple Streams:
    * here we can have more than one view in the dashboard.
    * so in the same entity, we can have multiple views, so we can display the account entity with other entities views such as activities, contacts, queues and so on. 


> references: https://global.hitachi-solutions.com/blog/dynamics-365-interactive-dashboards/