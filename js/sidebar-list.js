// Related Links
window.addEventListener("load", () => {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/index.html","/nsfw-pages/reddit-gone-wild.html","/nsfw-pages/reddit-nudes.html","/nsfw-pages/nsfwcomics-reddit.html","/nsfw-pages/reddit-tiktok-nsfw.html",
    "/nsfw-pages/reddit-xxx.html","/nsfw-pages/best-reddit-nsfw.html","/nsfw-pages/reddit-random-nsfw.html","/nsfw-pages/reddit-nsfw-dirty.html","/nsfw-pages/korean-nsfw-reddit.html","/nsfw-pages/anime-nsfw-reddit.html",
    "/nsfw-pages/reddit-petite-gone-wild.html","/nsfw-pages/reddit-nsfw-hardcore.html","/nsfw-pages/nsfw-china-reddit.html","/nsfw-pages/billie-eilish-nsfw-reddit.html","/nsfw-pages/reddit-gone-wild-swingers.html",
    "/nsfw-pages/omegle-nsfw-reddit.html","/nsfw-pages/tinder-nsfw-reddit.html","/nsfw-pages/nsfw-public-reddit.html","/nsfw-pages/reddit-nsfw-lingerie.html","/nsfw-pages/my-hero-academia-nsfw-reddit.html",
    "/nsfw-pages/reddit-nsfw-scrubs.html","/nsfw-pages/reddit-braces-nsfw.html","/nsfw-pages/victoria-secret-nsfw-reddit.html","/nsfw-pages/tight-dress-nsfw.html","/nsfw-pages/reddit-nsfw-teens.html",
    "/nsfw-pages/reddit-steven-universe-nsfw.html","/nsfw-pages/reddit-nsfw-webcam.html","/nsfw-pages/reddit-nsfw-cosplay.html","/nsfw-pages/reddit-asian-nsfw.html",
    "/nsfw-pages/reddit-nsfw-games.html","/nsfw-pages/hijab-nsfw-reddit.html","/nsfw-pages/reddit-lesbian-nsfw.html","/nsfw-pages/nsfw-gifs-reddit.html","/nsfw-pages/iama-nsfw-reddit.html","/nsfw-pages/reddit-nsfw-rwby.html",
    "/nsfw-pages/pokimane-nsfw-reddit.html","/nsfw-pages/reddit-nsfw-indian.html","/nsfw-pages/reddit-nsfw-bikini.html","/nsfw-pages/reddit-nsfw-beach.html","/nsfw-pages/reddit-trashy-nsfw.html","/nsfw-pages/reddit-wife-nsfw.html",
    "/nsfw-pages/reddit-nsfw-take-it-off.html","/nsfw-pages/nsfw-reddit-work.html","/nsfw-pages/reddit-nsfw-mom.html","/nsfw-pages/nsfw-reddit-real-girls.html","/nsfw-pages/reddit-big-brother-nsfw.html","/nsfw-pages/reddit-nsfw-dress.html",
    "/nsfw-pages/reddit-nsfw-feet.html","/nsfw-pages/black-nsfw-reddit.html","/nsfw-pages/reddit-latina-nsfw.html","/nsfw-pages/reddit-college-nsfw.html","/nsfw-pages/nsfw-snapchat-reddit.html","/nsfw-pages/reddit-fit-girls-nsfw.html",
    "/nsfw-pages/reddit-nsfw-pierced.html","/nsfw-pages/reddit-nsfw-gabbie-carter.html","/nsfw-pages/reddit-nsfw-dare.html","/nsfw-pages/reddit-nsfw-spanking.html","/nsfw-pages/reddit-nsfw-panties.html","/nsfw-pages/reddit-nsfw-flashing.html",
    "/nsfw-pages/reddit-nsfw-yoga.html","/nsfw-pages/witcher-nsfw-reddit.html","/nsfw-pages/nsfw-reddit-young.html","/nsfw-pages/nsfw-reddit-shower.html","/nsfw-pages/reddit-nsfw-grool.html","/nsfw-pages/reddit-nsfw-outfits.html",
    "/nsfw-pages/ariana-grande-nsfw-reddit.html","/nsfw-pages/reddit-progress-pics-nsfw.html","/nsfw-pages/nsfw-japan-reddit.html","/nsfw-pages/redhead-nsfw-reddit.html","/nsfw-pages/reddit-pregnancy-nsfw.html","/nsfw-pages/reddit-nsfw-romi-rain.html",
    "/nsfw-pages/reddit-nsfw-throat.html","/nsfw-pages/reddit-nsfw-busty.html","/nsfw-pages/reddit-nsfw-gf.html","/nsfw-pages/reddit-boudoir-nsfw.html","/nsfw-pages/reddit-nsfw-goth.html","/nsfw-pages/chubby-nsfw-reddit.html","/nsfw-pages/reddit-nsfw-bbc.html",
    "/nsfw-pages/reddit-mixed-nsfw.html","/nsfw-pages/sakimichan-nsfw-reddit.html","/nsfw-pages/reddit-nsfw-blonde.html","/nsfw-pages/reddit-nsfw-exhibitionist.html","/nsfw-pages/tattoo-nsfw-reddit.html","/nsfw-pages/reddit-nsfw-cleavage.html",
    "/nsfw-pages/reddit-kpop-nsfw.html","/nsfw-pages/reddit-nsfw-glasses.html","/nsfw-pages/reddit-nsfw-teacher.html","/nsfw-pages/nsfw-squirt-reddit.html","/nsfw-pages/reddit-russian-nsfw.html","/nsfw-pages/reddit-pixel-nsfw.html","/nsfw-pages/reddit-adorable-nsfw.html",
    "/nsfw-pages/reddit-harley-quinn-nsfw.html","/nsfw-pages/reddit-overwatch-nsfw.html","/nsfw-pages/reddit-nsfw-tan-lines.html","/nsfw-pages/reddit-nsfw-changing-room.html","/nsfw-pages/reddit-thai-nsfw.html","/nsfw-pages/ddlc-nsfw-reddit.html","/nsfw-pages/reddit-nsfw-bra.html",
    "/nsfw-pages/reddit-favorite-nsfw.html","/nsfw-pages/reddit-classy-nsfw.html","/nsfw-pages/reddit-nsfw-cougars.html","/nsfw-pages/reddit-nsfw-fitness.html","/nsfw-pages/nsfw-busted-reddit.html","/nsfw-pages/belle-delphine-nsfw-reddit.html","/nsfw-pages/eating-her-out-nsfw-reddit.html",
    "/nsfw-pages/furry-games-nsfw-reddit.html","/nsfw-pages/nsfw-heels-reddit.html","/nsfw-pages/nsfw-playboy-reddit.html","/nsfw-pages/reddit-nsfw-cheerleader.html","/nsfw-pages/reddit-nsfw-pick-one.html","/nsfw-pages/reddit-cute-nsfw.html","/nsfw-pages/fallout-nsfw-reddit.html",
    "/nsfw-pages/reddit-nsfw-group.html","/nsfw-pages/thick-nsfw-reddit.html","/nsfw-pages/reddit-nsfw-outdoors.html","/nsfw-pages/mature-nsfw-reddit.html","/nsfw-pages/reddit-orgasm-nsfw.html",];


    var aLinkName = ["Reddit NSFW 🔥","Gone Wild 😈","Nudes ✨","Nsfw comics","Tiktok NSFW","XXX","Best NSFW","Random Sexy","Dirty","Korean","Anime","Petite Wild","Hardcore","Chinese","Billie Eilish","Swingers Wild",
    "Omegle","Tinder","Public","Lingerie","Hero Academia","Scrubs","Braces","Victoria Secret","Tight Dress","Legal Teens","Steven Universe","Webcam NSFW","Cosplay NSFW","Asian","Games","Hijab","Lesbian","Gif NSFW","Tease",
    "RWBY NSFW","Pokimane","Indian","Bikini","Beach NSFW","Trashy","Wife","Take It Off","At Work","Mom NSFW","Real Girls","Big Brother","Dress NSFW","Feet","Blacked","Latina","College NSFW","Snapchat NSFW",
    "Fit Girls NSFW","Pierced NSFW","Gabbie Carter","Dare NSFW","Spanking","Panties","Flashing","Yoga NSFW","Witcher NSFW","Young","Shower NSFW","Grool","NSFW Outfits","Ariana Grande","Progress Pics NSFW","Japan","Redhead NSFW",
    "Pregnant NSFW","Romi Rain","Throat NSFW","Busty","GirlFriend NSFW","Boudoir NSFW","Goth NSFW","Chubby NSFW","BBC","Mixed NSFW","Sakimichan NSFW","Blonde NSFW","Exhibitionist Fun","Tattoo NSFW","Cleavage","KPOP NSFW",
    "Glasses NSFW","Teacher NSFW","Squirting","Russian NSFW","Pixel NSFW","Adorable NSFW","Harley Quinn NSFW","Overwatch NSFW","Tan Lines NSFW","Changing Room NSFW","Thai NSFW","DDLC NSFW","BRA NSFW","Favorite NSFW","Classy NSFW",
    "Cougars","Fitness NSFW","Busted Holes","Belle Delphine","Eating Her Out","Furry NSFW","Heels NSFW","Playboy","Cheerleader","Pick One","Cute NSFW","Fallout NSFW","Group NSFW","Thick NSFW","Outdoors NSFW","Mature","Orgasm",];
    
    // store url pathname as string into current variable 
    const currentUrl = window.location.pathname.toString();
    var i;

    // check if related links contain converted current Url string in array
    if (relatedLinks.includes(currentUrl)) {

        // if current Url exists in array - remove from link list & link name by it's corresponding index
        const linkIndex = relatedLinks.indexOf(currentUrl);
        relatedLinks.splice(linkIndex,1);
        aLinkName.splice(linkIndex, 1);

        // store new array in new variables
        var linkItem = relatedLinks;
        var nameItem = aLinkName;

        // execute a for loop for new set of array - get elements by their new index
        for (i = 0; i < linkItem.length && nameItem.length; i++) {
            idLink = linkItem[i];
            idText = nameItem[i];

            // create new element list item - insert innerhtml components
            let linkList = document.createElement("li");
            linkList.classList.add("sidebar-menu-category");
            linkList.innerHTML = 
            `
                <a href="${idLink}">
                    <button class="sidebar-accordion-menu">
                        <div class="menu-title-flex">
                            <h2 class="menu-title"><strong>${idText}</strong></h2>
                        </div>
                    </button>
                </a>
            `;

            // find element by it's id inside document and append created new list item
            document.querySelector(".sidebar-menu-category-list").appendChild(linkList);
        }
    } else {
        // execute a for loop for new set of array - get elements by their new index
        for (i = 0; i < relatedLinks.length && aLinkName.length; i++) {
            idLink = relatedLinks[i];
            idText = aLinkName[i];

            // create new element list item - insert innerhtml components
            let linkList = document.createElement("li");
            linkList.classList.add("sidebar-menu-category");
            linkList.innerHTML = 
            `
            <a href="${idLink}">
                    <button class="sidebar-accordion-menu">
                        <div class="menu-title-flex">
                            <h2 class="menu-title"><strong>${idText}</strong></h2>
                        </div>
                    </button>
                </a>
            `;

            // find element by it's id inside document and append created new list item
            document.querySelector(".sidebar-menu-category-list").appendChild(linkList);
        }
    }
});
