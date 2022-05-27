var Input = prompt(`What would you like to do? (Type "Help" for a list of commands)`).toLowerCase();

if (Input) {
  if (Input == "help") {
    alert("School\nUtility\nFun");
  }
  
  if (Input == "school") {
      var Action = prompt(`Welcome to "School", What would you like to do? (Type "Help" for a list of commands)`).toLowerCase();

      if (Action) {
        if (Action == "help") {
            alert("School:\n     Canvas,\n     Bell,\n     Lunch,\n     SkyWard");
        }

        if (Action == "bell") {
            window.open("https://oquirrhhills.jordandistrict.org/info/bellschedule");
        }

        if (Action == "lunch") {
            window.open("https://jordandistrict.nutrislice.com/menu/oquirrh-hills");
        }

        if (Action == "canvas") {
            window.open("https://jsd.instructure.com");
        }

        if (Action == "skyward") {
            window.open("https://skystu.jordan.k12.ut.us/scripts/wsisa.dll/WService=wsEAplus/fwemnu01.w");
        }
      } else {
          alert("No Action Specified...");
      }
  }

  if (Input == "utility") {
    var Action = prompt(`Welcome to "Utility", What would you like to do? (Type "Help" for a list of commands)`).toLowerCase();

    if (Action) {
        if (Action == "help") {
            alert("Utility:\n     RemoveBG,\n     Search,\n     Gmail,\n     Credits,\n     SearchYT,\n     Link,\n     Run");
        }

        if (Action == "gmail") {
            window.open("https://gmail.com/mail");
        }
        
        if (Action == "search") {
            var Search = prompt("What would you like to seach on Google?");
        
            if (Search) {
                window.open("https://www.google.com/search?q=" + Search);
            } else {
                alert("Search failed, please try again...");
            }
        }

        if (Action == "credits") {
            alert("Creator:\n     Max McDaniel\nContributors:\n     Max Barland,\n     Tanner Berg,\n     Typer Walton,\n     David Oman,\n     Typer Nunley,\n     Austin Fish");
        }

        if (Action == "removebg") {
            window.open("https://remove.bg");
        }

        if (Action == "searchyt") {
            var YouTubeBeginning = "https://www.youtube.com/results?search_query=";
            var InputSearch = prompt("What do you want to search for on YouTube?");
            
            if (InputSearch) {
                window.open(YouTubeBeginning + InputSearch.replace(/\s/g, '+'));
            } else {
              alert("Please Provide a Search!");
            }
        }

        if (Action == "run") {
            var CodeToRun = prompt("Enter the JS Code...");
            
            if (CodeToRun) {
              eval(CodeToRun);
            } else {
              alert("Please enter the JS Code...");
            }
        }

        if (Action == "link") {
            var Link = prompt("What is the site link?");
            
            if (Link) {
                window.open("https://" + Link);
                alert("Link was opened!");
            } else {
                alert("Please enter a link");
            }
        }
    } else {
        alert("No Action Specified...");
    }
}

if (Input == "fun") {
    var Action = prompt(`Welcome to "Fun", What would you like to do? (Type "Help" for a list of commands)`).toLowerCase();

    if (Action) {
        if (Action == "help") {
            alert("Fun:\n     Construct,\n     CoolMath,\n     Wordle,\n     Block,\n     Cache,\n     Alert,\n     Rick,\n     Edit,\n     Stop Edit");
        }

        if (Action == "edit") {
            document.body.contentEditable = true;
            alert("Page Content is editable!");
        }
        
        if (Action == "stop edit") {
            document.body.contentEditable = false;
            alert("Page Content is not editable!");
        }
        
        if (Action =="alert") {
            var InputAlert = prompt("What is the alert?");
            
            if (InputAlert) {
                alert(InputAlert);
            } else {
              alert("Please enter the Alert Text");
            }
        }
        
        if (Action == "cache") {
            var Link = prompt("What is the site link?");
            
            if (Link) {
                window.open("https://webcache.googleusercontent.com/search?q=cache:" + Link);
                alert("Link was opened!");
            } else {
                alert("Please enter a link");
            }
        }
        
        if (Action == "rick") {
            var Response = prompt("Are you sure?").toLowerCase();
        
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
        
        if (Action == "block") {
            var User = prompt("What is the beginning of your email?");
            var Link = prompt("What is the link? (Include the https://)");
            var Description = "&bc=" + prompt("What is the reason for the block?");
            
            var Beginning = "https://7rm60005.ibosscloud.com/syncCustomBranding/block_page/127224/2145/2145-block_page.html?fn=Middle+7-9&fp=3&bu=";
            var Middle = "&ip=10.153.68.149&ibip=cn-864969938-vnsg13023.ibosscloud.com&pc=1&user=";
            var End = "&ipm=cn-864970192-vnsg13216.ibosscloud.com";
            
            if (User && Link && Description) {
                window.open(Beginning + Link + Description + Middle + User + End);    
            } else {
              alert("You forgot one of the parameters!");
            }
        }
        
        if (Action == "wordle") {
            window.open("https://www.nytimes.com/games/wordle/index.html");
        }
        
        if (Action == "coolmath") {
            window.open("https://coolmathgames.com");
        }
        
        if (Action == "construct") {
            window.open("https://www.construct.net/en/free-online-games");
        }
    } else {
        alert("No Action Specified...");
    }
}

} else {
      alert("Please enter something to do!");
}