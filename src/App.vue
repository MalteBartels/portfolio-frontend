<template>
  <div id="container">
        <hello></hello>
        <type-writer 
          :textInput="welcomeMessage"
          @onFinishedTyping="handleTypeFinished"
        ></type-writer>
        <Links :profiles="profiles"></Links>
        <Impressum />
    </div>
</template>

<script>
import Hello from "./components/Hello"
import TypeWriter from "./components/TypeWriter"
import Links from "./components/Links"
import Impressum from "./components/Impressum"

export default {
  name: 'app',
  data() {
    return {
      profiles: [],
      welcomeMessage: "Hallo! Hier gibt es noch nichts zu sehen. Bitte gehen Sie weiter!"
    }
  },
  components: {
    "Hello": Hello,
    "TypeWriter": TypeWriter,
    "Links": Links,
    "Impressum": Impressum
  },
  methods: {
    handleTypeFinished() {
      this.profiles = [{
        url: "https://github.com/MalteBartels",
        img: "github.png"
      },
      {
        url: "https://www.xing.com/profile/Malte_Bartels5/",
        img: "xing.png"
      },
      {
        url: "https://www.linkedin.com/in/malte-bartels-832061172/",
        img: "linkedin.png"
      }];
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(250,250,250);
}

#container {  
    box-sizing: border-box;
    display: flex;
    height: 100vh;
    width: 100vw;
    padding: 0 1.5em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-family: Courier;
    text-align: center;
  }

  #profile {
      animation: fadein .5s ease-in-out;
      height: 8em;
      width: 8em;
      border-radius: 100%;
  }
  
  p {
    line-height: 2em;
    font-size: 1.2em;
    margin: 0;
    width: 100%;
    max-width: 30em;
    height: 5em;
    margin: 1em 3em;
    text-align: left;
  }
  
  #links {
    display: flex;
  }
  
  #links a {
    transition: .15s ease-in-out;
    display: inline-block;
    margin: 1em;
        
    transform: translateY(2.5em);
    opacity: 0;
    
    vertical-align: center;
    color: white;
    font-weight: 600;
  }

  #links a img {
    height: 4em;
    width: auto;
  }

  #impressum_btn {
      position: fixed;
      bottom: 1em;
      right: 1em;
      cursor: pointer;
  }

  #impressum_modal {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      opacity: 0;
      visibility: hidden;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  #impressum_modal p {
    box-sizing: border-box;
      width: 50vw;
      height: 50vh;
      margin: 0;
      background-color: rgb(250,250,250);
      box-shadow: 0 0 0 9999px rgba(0,0,0,.5);
      padding: 1.5em;
      overflow-y: auto;
  }

  #impressum_modal p a {
      color: black;
  }


  #impressum_modal.active {
      animation: fadein .3s ease-in-out;
    display: flex;
    visibility: visible;
    opacity: 1;
  }
  
  .animate-fadein {
    animation: fadein .3s ease-out;
  }
  
  #links a.animate-slidein {
    transition: opacity 1s ease-in, transform 1s ease-out;
    opacity: 1;
    transform: translateY(0);
  }

  #links a:hover {
    transition: .15s ease-in-out;
    transform: translateY(5px);
  }
  
  @keyframes fadein {
    from { opacity: 0 } 
    to { opacity: 1 }
  }

  @media screen and (max-width: 500px) {
    #impressum_modal {
      justify-content: center;
      align-items: stretch;
    }

    #impressum_modal p {
      height: 100%;
      width: 100%;
    }
  }
  
</style>
