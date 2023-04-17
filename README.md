#  MyNews Application 


Example of News Portal like application, by provided design. Application is created with Vite tool, ReactJS, Typescript, SCSS. It contains gridview od news, that are catogorised by clicking on sidebar navigation (categories) or by entering a search term. Application is mobile friendly, as the layout is optimized for mobile devices / smart phones. 

The application saves the favorited articles in the localstorage. And as there were no click action on article, the function to add article to favorites was added to click on article. Also the favorited article will show a small heart on the bottom right of the article. If you click again on the favorited article, it will not be favorited anymore. And that is live updating on click on view. If you click on article under favorited cathegory, it will vanish from the list of articles as it is not favorited anymore.

The Latest News widget loads 10 news on load, and than adds 10 by 10 when you scroll to the bottom of the widget. On see all news i pulled data from /all.json endpoint and it gives 20 items on inital load, but it adds 10 after each scroll to the bottom (the server doesnt allow numbers like limit=100 so it gets so much articles so in ideal environment this approach would get all articles as there would not be limit like on this api)

For Api I decided to use NYTimes API as it was more easyer to understand and i found what i need for this right away. It can get a bit challenging and feed can be empty because of their request limits.



## Instalation

1. Clone the repository:
```
git clone https://github.com/slido/myNews.git
````

2. Enter the app folder
```
cd myNews
```

3. Install the application
```
npm i
```

4. Voila! The application is installed!




## Starting the app

1. Running the application
```
npm run dev
```

2. The application should be running on http://localhost:5173/ now!

3. Also, you can see the deployed version live: https://my-news-rho.vercel.app/ if you want!



