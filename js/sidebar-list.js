// Related Links
window.addEventListener("load", () => {
    // Array of links and anchor link name to be related by category by order
    var relatedLinks = ["/index","/nsfw-pages/reddit-gone-wild","/nsfw-pages/reddit-nudes","/nsfw-pages/nsfwcomics-reddit","/nsfw-pages/reddit-tiktok-nsfw",
    "/nsfw-pages/reddit-xxx","/nsfw-pages/best-reddit-nsfw","/nsfw-pages/reddit-random-nsfw","/nsfw-pages/reddit-nsfw-dirty","/nsfw-pages/korean-nsfw-reddit","/nsfw-pages/anime-nsfw-reddit",
    "/nsfw-pages/reddit-petite-gone-wild","/nsfw-pages/reddit-nsfw-hardcore","/nsfw-pages/nsfw-china-reddit","/nsfw-pages/billie-eilish-nsfw-reddit","/nsfw-pages/reddit-gone-wild-swingers",
    "/nsfw-pages/omegle-nsfw-reddit","/nsfw-pages/tinder-nsfw-reddit","/nsfw-pages/nsfw-public-reddit","/nsfw-pages/reddit-nsfw-lingerie","/nsfw-pages/my-hero-academia-nsfw-reddit",
    "/nsfw-pages/reddit-nsfw-scrubs","/nsfw-pages/reddit-braces-nsfw","/nsfw-pages/victoria-secret-nsfw-reddit","/nsfw-pages/tight-dress-nsfw","/nsfw-pages/reddit-nsfw-teens",
    "/nsfw-pages/reddit-steven-universe-nsfw","/nsfw-pages/reddit-nsfw-webcam","/nsfw-pages/reddit-nsfw-cosplay","/nsfw-pages/reddit-asian-nsfw",
    "/nsfw-pages/reddit-nsfw-games","/nsfw-pages/hijab-nsfw-reddit","/nsfw-pages/reddit-lesbian-nsfw","/nsfw-pages/nsfw-gifs-reddit","/nsfw-pages/iama-nsfw-reddit","/nsfw-pages/reddit-nsfw-rwby",
    "/nsfw-pages/pokimane-nsfw-reddit","/nsfw-pages/reddit-nsfw-indian","/nsfw-pages/reddit-nsfw-bikini","/nsfw-pages/reddit-nsfw-beach","/nsfw-pages/reddit-trashy-nsfw","/nsfw-pages/reddit-wife-nsfw",
    "/nsfw-pages/reddit-nsfw-take-it-off","/nsfw-pages/nsfw-reddit-work","/nsfw-pages/reddit-nsfw-mom","/nsfw-pages/nsfw-reddit-real-girls","/nsfw-pages/reddit-big-brother-nsfw","/nsfw-pages/reddit-nsfw-dress",
    "/nsfw-pages/reddit-nsfw-feet","/nsfw-pages/black-nsfw-reddit","/nsfw-pages/reddit-latina-nsfw","/nsfw-pages/reddit-college-nsfw","/nsfw-pages/nsfw-snapchat-reddit","/nsfw-pages/reddit-fit-girls-nsfw",
    "/nsfw-pages/reddit-nsfw-pierced","/nsfw-pages/reddit-nsfw-gabbie-carter","/nsfw-pages/reddit-nsfw-dare","/nsfw-pages/reddit-nsfw-spanking","/nsfw-pages/reddit-nsfw-panties","/nsfw-pages/reddit-nsfw-flashing",
    "/nsfw-pages/reddit-nsfw-yoga","/nsfw-pages/witcher-nsfw-reddit","/nsfw-pages/nsfw-reddit-young","/nsfw-pages/nsfw-reddit-shower","/nsfw-pages/reddit-nsfw-grool","/nsfw-pages/reddit-nsfw-outfits",
    "/nsfw-pages/ariana-grande-nsfw-reddit","/nsfw-pages/reddit-progress-pics-nsfw","/nsfw-pages/nsfw-japan-reddit","/nsfw-pages/redhead-nsfw-reddit","/nsfw-pages/reddit-pregnancy-nsfw","/nsfw-pages/reddit-nsfw-romi-rain",
    "/nsfw-pages/reddit-nsfw-throat","/nsfw-pages/reddit-nsfw-busty","/nsfw-pages/reddit-nsfw-gf","/nsfw-pages/reddit-boudoir-nsfw","/nsfw-pages/reddit-nsfw-goth","/nsfw-pages/chubby-nsfw-reddit","/nsfw-pages/reddit-nsfw-bbc",
    "/nsfw-pages/reddit-mixed-nsfw","/nsfw-pages/sakimichan-nsfw-reddit","/nsfw-pages/reddit-nsfw-blonde","/nsfw-pages/reddit-nsfw-exhibitionist","/nsfw-pages/tattoo-nsfw-reddit","/nsfw-pages/reddit-nsfw-cleavage",
    "/nsfw-pages/reddit-kpop-nsfw","/nsfw-pages/reddit-nsfw-glasses","/nsfw-pages/reddit-nsfw-teacher","/nsfw-pages/nsfw-squirt-reddit","/nsfw-pages/reddit-russian-nsfw","/nsfw-pages/reddit-pixel-nsfw","/nsfw-pages/reddit-adorable-nsfw",
    "/nsfw-pages/reddit-harley-quinn-nsfw","/nsfw-pages/reddit-overwatch-nsfw","/nsfw-pages/reddit-nsfw-tan-lines","/nsfw-pages/reddit-nsfw-changing-room","/nsfw-pages/reddit-thai-nsfw","/nsfw-pages/ddlc-nsfw-reddit","/nsfw-pages/reddit-nsfw-bra",
    "/nsfw-pages/reddit-favorite-nsfw","/nsfw-pages/reddit-classy-nsfw","/nsfw-pages/reddit-nsfw-cougars","/nsfw-pages/reddit-nsfw-fitness","/nsfw-pages/nsfw-busted-reddit","/nsfw-pages/belle-delphine-nsfw-reddit","/nsfw-pages/eating-her-out-nsfw-reddit",
    "/nsfw-pages/furry-games-nsfw-reddit","/nsfw-pages/nsfw-heels-reddit","/nsfw-pages/nsfw-playboy-reddit","/nsfw-pages/reddit-nsfw-cheerleader","/nsfw-pages/reddit-nsfw-pick-one","/nsfw-pages/reddit-cute-nsfw","/nsfw-pages/fallout-nsfw-reddit",
    "/nsfw-pages/reddit-nsfw-group","/nsfw-pages/thick-nsfw-reddit","/nsfw-pages/reddit-nsfw-outdoors","/nsfw-pages/mature-nsfw-reddit","/nsfw-pages/reddit-orgasm-nsfw","/nsfw-pages/reddit-cyberpunk-nsfw","/nsfw-pages/reddit-tiny-nsfw",
    "/nsfw-pages/reddit-nsfw-bride","/nsfw-pages/reddit-nsfw-transformation","/nsfw-pages/nsfw-military-reddit","/nsfw-pages/black-women-nsfw-reddit","/nsfw-pages/nymphos-nsfw-reddit","/nsfw-pages/reddit-nsfw-pornstars",
    "/nsfw-pages/nsfw-disney-reddit","/nsfw-pages/reddit-nsfw-festival","/nsfw-pages/reddit-fire-emblem-nsfw","/nsfw-pages/reddit-models-nsfw","/nsfw-pages/muslim-nsfw-reddit","/nsfw-pages/reddit-instagram-nsfw","/nsfw-pages/reddit-asian-american-nsfw",
    "/nsfw-pages/reddit-skinny-nsfw","/nsfw-pages/nsfw-reddit-feed","/nsfw-pages/reddit-amisexy-nsfw","/nsfw-pages/nsfw-skyrim-reddit","/nsfw-pages/reddit-nsfw-mirror-selfies","/nsfw-pages/sexually-frustrated-reddit-nsfw","/nsfw-pages/reddit-nsfw-frontpage",
    "/nsfw-pages/reddit-nsfw-jilling","/nsfw-pages/reddit-nsfw-barista","/nsfw-pages/reddit-leggings-nsfw",];


    var aLinkName = ["Reddit NSFW 🔥","Gone Wild 😈","Nudes ✨","Nsfw comics","Tiktok NSFW","XXX","Best NSFW","Random Sexy","Dirty","Korean","Anime","Petite Wild","Hardcore","Chinese","Billie Eilish","Swingers Wild",
    "Omegle","Tinder","Public","Lingerie","Hero Academia","Scrubs","Braces","Victoria Secret","Tight Dress","Legal Teens","Steven Universe","Webcam NSFW","Cosplay NSFW","Asian","Games","Hijab","Lesbian","Gif NSFW","Tease",
    "RWBY NSFW","Pokimane","Indian","Bikini","Beach NSFW","Trashy","Wife","Take It Off","At Work","Mom NSFW","Real Girls","Big Brother","Dress NSFW","Feet","Blacked","Latina","College NSFW","Snapchat NSFW",
    "Fit Girls NSFW","Pierced NSFW","Gabbie Carter","Dare NSFW","Spanking","Panties","Flashing","Yoga NSFW","Witcher NSFW","Young","Shower NSFW","Grool","NSFW Outfits","Ariana Grande","Progress Pics NSFW","Japan","Redhead NSFW",
    "Pregnant NSFW","Romi Rain","Throat NSFW","Busty","GirlFriend NSFW","Boudoir NSFW","Goth NSFW","Chubby NSFW","BBC","Mixed NSFW","Sakimichan NSFW","Blonde NSFW","Exhibitionist Fun","Tattoo NSFW","Cleavage","KPOP NSFW",
    "Glasses NSFW","Teacher NSFW","Squirting","Russian NSFW","Pixel NSFW","Adorable NSFW","Harley Quinn NSFW","Overwatch NSFW","Tan Lines NSFW","Changing Room NSFW","Thai NSFW","DDLC NSFW","BRA NSFW","Favorite NSFW","Classy NSFW",
    "Cougars","Fitness NSFW","Busted Holes","Belle Delphine","Eating Her Out","Furry NSFW","Heels NSFW","Playboy","Cheerleader","Pick One","Cute NSFW","Fallout NSFW","Group NSFW","Thick NSFW","Outdoors NSFW","Mature","Orgasm",
    "Cyberpunk NSFW","Tiny NSFW","Bride NSFW","Transformation NSFW","Military NSFW","Black Women","Nymphos","Pornstars","Disney NSFW","Festival NSFW","Fire Emblem NSFW","Models NSFW","Muslim NSFW","Instagram NSFW","Asian American NSFW",
    "Skinny NSFW","Feed NSFW","AmISexy NSFW","Skyrim NSFW","Mirror Selfie NSFW","Sexually Frustrated","Frontpage NSFW","Jilling","Barista NSFW","Leggings NSFW",];
    
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
