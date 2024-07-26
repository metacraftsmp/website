function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

var members = [
    {
        "name":"wikiweb",
        "image":"wikiweb.jpg",
        "links": [
            {"name": "youtube", "link":"https://www.youtube.com/@wikiwebtv/"},
            {"name": "twitch", "link":"https://twitch.tv/wikiweb"},
            {"name": "instagram", "link":"https://www.instagram.com/wikiweb.tv"},
        ]
    },
    {
        "name":"Milad",
        "image":"milad.jpg",
        "links": [
            {"name": "youtube", "link":"https://www.youtube.com/@milad148/"},
            {"name": "twitch", "link":"https://twitch.tv/Milad"},
            {"name": "instagram", "link":"https://www.instagram.com/itisMilad148"},
        ]
    },
    {
        "name":"Freequense",
        "image":"babak.jpg",
        "links": [
            {"name": "youtube", "link":"https://youtube/freequense"},
            {"name": "instagram", "link":"https://instagram.com/freequense"},
            {"name": "twitch", "link":"https://twitch.tv/freequense"},
        ]
    },    
    {
        "name":"Arefmop",
        "image":"arefmop.jpg",
        "links": [
            {"name": "youtube", "link":"https://www.youtube.com/@ArefMop"}            
        ]
    },
    {
        "name":"CaptainPyro",
        "image":"cp.jpg",
        "links": [
            {"name": "youtube", "link":"https://www.youtube.com/c/CaptainPyro"},
            {"name": "instagram", "link":"https://www.instagram.com/captain.pyro"},
        ]
    },
    {
        "name":"Lord Ordak",
        "image":"lo.jpg",
        "links": [
            {"name": "youtube", "link":"https://www.youtube.com/@0rdak/videos"},
            {"name": "youtube", "link":"https://www.youtube.com/@LordQaz"},
        ]
    },
    {
        "name":"AminMckellen",
        "image":"am.jpg",
        "links": [
            {"name": "twitch", "link":"https://www.twitch.tv/aminmckellen"},
            {"name": "youtube", "link":"https://www.youtube.com/@aminmckellen"},
            {"name": "instagram", "link":"https://www.instagram.com/AminMckellen"},
        ]
    },
    {
        "name":"REZA KP1",
        "image":"rk.jpg",
        "links": [            
            {"name": "youtube", "link":"https://youtube.com/@REZAKP1"},
        ]
    },
    {
        "name":"ArmanEnzo",
        "image":"armanenzo.jpg",
        "links": [
            {"name": "youtube", "link":"https://www.youtube.com/@ArmanEnzo"},
            {"name": "instagram", "link":"https://www.instagram.com/_arman_enzo_"},
        ]
    },
    {
        "name":"Shayan_mr",
        "image":"shm.jpg",
        "links": [            
            {"name": "link", "link":"https://link.space/@shayan_mr"},
        ]
    },
    {
        "name":"Sina Crash",
        "image":"seenacrash.jpg",
        "links": [
            {"name": "twitch", "link":"https://twitch.tv/seenacrash"},
            {"name": "youtube", "link":"https://youtube.com/seenacrash"},
        ]
    },
    {
        "name":"RiBiTy",
        "image":"ribity.jpg",
        "links": [
            {"name": "twitch", "link":"https://twitch.tv/ribity"},
            {"name": "youtube", "link":"https://youtube.com/@TheRiBiTy"},
        ]
    },
    {
        "name":"MartinCraft",
        "image":"martincraft.jpg",
        "links": [            
            {"name": "youtube", "link":"https://www.youtube.com/@martincraft96"},
        ]
    },    
    {
        "name":"Doormendez",
        "image":"doormendez.jpg",
        "links": [
            {"name": "youtube", "link":"https://youtube.com/@Doormendez"},
            {"name": "instagram", "link":"https://instagram.com/the_doormendez"},
        ]
    },
    {
        "name":"PixieFarnaz",
        "image":"pixifarnaz.jpg",
        "links": [
            {"name": "twitch", "link":"https://www.twitch.tv/pixiefarnaz"},
            {"name": "youtube", "link":"https://www.youtube.com/@PixieFarnazGaming"},
            {"name": "instagram", "link":"https://www.instagram.com/pixiefarnaz/"},
        ]
    },
    {
        "name":"DjFaren",
        "image":"djf.jpg",
        "links": [
            {"name": "twitch", "link":"https://www.twitch.tv/djfaren"},
            {"name": "youtube", "link":"https://www.youtube.com/@DeejayFaren"},
        ]
    },    
    {
        "name":"Amir_Right",
        "image":"amirr.jpg",
        "links": [
            {"name": "twitch", "link":"https://www.twitch.tv/amir_right"},
            {"name": "youtube", "link":"https://www.youtube.com/@extraright"},
        ]
    },    
    {
        "name":"OstadFazi",
        "image":"ostadfazi.jpg",
        "links": [
            {"name": "youtube", "link":"https://www.youtube.com/@Ostad_Fazi/"},
            {"name": "instagram", "link":"https://www.instagram.com/ostad_fazi/"},
        ]
    },    
    {
        "name":"MAK_RAVEN",
        "image":"mak.jpg",
        "links": [
            {"name": "youtube", "link":"https://www.youtube.com/@MAKRAVEN?sub_confirmation=1"},
            {"name": "link", "link":"https://reymit.ir/mak_raven"},
            {"name": "instagram", "link":"https://www.instagram.com/makraven_/"},            
        ]
    },
    {
        "name":"Amroz98",
        "image":"amroz.jpg",
        "links": [
            {"name": "twitch", "link":"https://www.twitch.tv/amroz98"},            
            {"name": "instagram", "link":"https://www.instagram.com/amroz98/"},            
        ]
    },    
    {
        "name":"NotAGamerGirl",
        "image":"kamand.jpg",
        "links": [
            {"name": "twitch", "link":"https://twitch.tv/notagamergiirl"},
            {"name": "youtube", "link":"https://youtube.com/Notagamergirl"},
            {"name": "instagram", "link":"https://instagram.com/notagamergiirl"}, 
        ]
    },    
    {
        "name":"SeD Ruski",
        "image":"sedr.jpg",
        "links": [
            {"name": "twitch", "link":"https://twitch.tv/sed_ruski"},
            {"name": "youtube", "link":"https://www.youtube.com/c/SeDRuski"},
            {"name": "instagram", "link":"https://www.instagram.com/sed_ruski/"}, 
        ]
    },
    {
        "name":"Admiral",
        "image":"admiral.jpg",
        "links": [
            {"name": "twitch", "link":"https://www.twitch.tv/admiral_tidebringer"},
            {"name": "youtube", "link":"https://www.youtube.com/c/admiral_tidebringer"},
            {"name": "instagram", "link":"https://www.instagram.com/admiral_tidebringer/"}, 
        ]
    },
    {
        "name":"Erfan Toxic",
        "image":"erfant.jpg",
        "links": [
            {"name": "youtube", "link":"https://www.youtube.com/channel/UCrylWThMxTaQOfEZKTa-pbw"}            
        ]
    },
    {
        "name":"Rwin",
        "image":"rwin.jpg",
        "links": [
            {"name": "twitch", "link":"https://www.twitch.tv/RwinShow"},
            {"name": "youtube", "link":"https://www.youtube.com/c/RwinShow"},
            {"name": "instagram", "link":"https://www.instagram.com/RwinShow/"}, 
        ]
    },
    {
        "name":"Hessam Ld",
        "image":"hesamld.png",
        "links": [
            {"name": "link", "link":"https://www.aparat.com/Hessam_Ld_Live"},
            {"name": "youtube", "link":"https://www.youtube.com/HessamLd"},
            {"name": "instagram", "link":"https://www.instagram.com/hessam_ld"}, 
        ]
    }

]

var members=shuffle(members);

