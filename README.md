# Welcome to Easy Pay 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## About

This a react native app that allows users to send money, with the home screen with all the features of a typical mobile banking app.

The send screen features a **custom number pad** that conforms with the apps design style.

## Get started

1. Clone repository

    ```bash
       git clone https://github.com/deluxesande/mobile_app_with_tailwind.git
       cd mobile_app_with_tailwind
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Start the app

    ```bash
     npm run start
    ```

## Tech Stack

-   Expo
-   React native
-   Native wind

    > Used for tailwind class names styling as a normal react app

    ```javascript
    <View className="bg-slate-100">
        <Text className="text-2xl">Hello world</Text>
    </View>
    ```

-   Zustand

    > used for mock authentication and mocking users in a database. It is use in:

        - /login
        - /home
        - /profile

-   Bottom Sheet

    > Used to display users in the app when sending money. Used in:

        - /home/welcomeSection

-   immer
    > Used for object mutation in zustand

## Missing features

1. Backend system
2. Authentication

## Learn more

To learn more about developing your project with Expo, look at the following resources:

-   [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
-   [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
