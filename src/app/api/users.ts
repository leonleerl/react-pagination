
const users : User[] = [{"id":1,"fullName":"Farly Barok","fullMobileNo":"+420 936 275 9203","email":"fbarok0@aboutads.info","signupDate":"2024-06-25"},
    {"id":2,"fullName":"Norean Gerhartz","fullMobileNo":"+54 483 769 3611","email":"ngerhartz1@wired.com","signupDate":"2024-10-25"},
    {"id":3,"fullName":"Dorris Daynter","fullMobileNo":"+57 995 933 4377","email":"ddaynter2@sfgate.com","signupDate":"2024-05-06"},
    {"id":4,"fullName":"Flossy Buche","fullMobileNo":"+46 275 912 8530","email":"fbuche3@tripod.com","signupDate":"2024-07-31"},
    {"id":5,"fullName":"Brooks Brimicombe","fullMobileNo":"+31 586 612 1365","email":"bbrimicombe4@ibm.com","signupDate":"2024-04-12"},
    {"id":6,"fullName":"Ronnica Wyche","fullMobileNo":"+62 173 768 8149","email":"rwyche5@google.co.jp","signupDate":"2024-07-12"},
    {"id":7,"fullName":"Adolphe De Normanville","fullMobileNo":"+593 379 429 9252","email":"ade6@pcworld.com","signupDate":"2024-06-21"},
    {"id":8,"fullName":"Chloette Staite","fullMobileNo":"+242 878 366 9189","email":"cstaite7@plala.or.jp","signupDate":"2024-09-22"},
    {"id":9,"fullName":"Rebekah Woodford","fullMobileNo":"+45 997 710 1276","email":"rwoodford8@jiathis.com","signupDate":"2024-05-08"},
    {"id":10,"fullName":"Lois Cattonnet","fullMobileNo":"+86 365 948 4856","email":"lcattonnet9@w3.org","signupDate":"2024-08-04"},
    {"id":11,"fullName":"Gherardo Lyles","fullMobileNo":"+48 720 863 8213","email":"glylesa@last.fm","signupDate":"2024-02-12"},
    {"id":12,"fullName":"Andrew Loftie","fullMobileNo":"+255 446 312 5347","email":"aloftieb@shinystat.com","signupDate":"2024-10-16"},
    {"id":13,"fullName":"Margalo Clucas","fullMobileNo":"+353 567 841 9162","email":"mclucasc@mlb.com","signupDate":"2024-04-20"},
    {"id":14,"fullName":"Nil Gheorghe","fullMobileNo":"+86 543 121 6214","email":"ngheorghed@google.nl","signupDate":"2024-12-25"},
    {"id":15,"fullName":"Zach Rolfini","fullMobileNo":"+55 499 161 9631","email":"zrolfinie@paginegialle.it","signupDate":"2024-08-09"},
    {"id":16,"fullName":"Hunter Dunn","fullMobileNo":"+386 647 780 7207","email":"hdunnf@berkeley.edu","signupDate":"2024-12-04"},
    {"id":17,"fullName":"Mary Denney","fullMobileNo":"+962 672 505 8570","email":"mdenneyg@drupal.org","signupDate":"2024-12-25"},
    {"id":18,"fullName":"Albie Lemoir","fullMobileNo":"+1 505 963 3446","email":"alemoirh@virginia.edu","signupDate":"2024-03-18"},
    {"id":19,"fullName":"Jaynell McAllen","fullMobileNo":"+420 925 524 8604","email":"jmcalleni@discovery.com","signupDate":"2024-12-02"},
    {"id":20,"fullName":"Eli Clemits","fullMobileNo":"+86 905 913 6004","email":"eclemitsj@tinyurl.com","signupDate":"2024-10-27"},
    {"id":21,"fullName":"Hersch Pacquet","fullMobileNo":"+7 527 206 6547","email":"hpacquetk@princeton.edu","signupDate":"2024-10-04"},
    {"id":22,"fullName":"Cassie Pallent","fullMobileNo":"+1 653 486 2682","email":"cpallentl@china.com.cn","signupDate":"2024-01-15"},
    {"id":23,"fullName":"Adrien Tiuit","fullMobileNo":"+7 423 183 1971","email":"atiuitm@jiathis.com","signupDate":"2024-08-02"},
    {"id":24,"fullName":"Cathrin Liddard","fullMobileNo":"+86 225 492 0300","email":"cliddardn@sciencedirect.com","signupDate":"2024-05-31"},
    {"id":25,"fullName":"Chiquia McKibbin","fullMobileNo":"+52 564 315 4031","email":"cmckibbino@house.gov","signupDate":"2024-02-20"},
    {"id":26,"fullName":"Maurise Gainsborough","fullMobileNo":"+358 333 396 8780","email":"mgainsboroughp@usda.gov","signupDate":"2024-05-30"},
    {"id":27,"fullName":"Modestine MacRannell","fullMobileNo":"+234 833 260 2296","email":"mmacrannellq@latimes.com","signupDate":"2024-09-26"},
    {"id":28,"fullName":"Aluino Hatto","fullMobileNo":"+7 753 472 0578","email":"ahattor@oakley.com","signupDate":"2024-09-22"},
    {"id":29,"fullName":"Audrye Kenworthey","fullMobileNo":"+62 471 292 3605","email":"akenwortheys@scribd.com","signupDate":"2024-06-12"},
    {"id":30,"fullName":"Shurlocke de Bullion","fullMobileNo":"+351 375 681 7873","email":"sdet@blogspot.com","signupDate":"2024-06-05"},
    {"id":31,"fullName":"Danie Troillet","fullMobileNo":"+86 775 156 3874","email":"dtroilletu@edublogs.org","signupDate":"2024-06-26"},
    {"id":32,"fullName":"Nyssa Clemenson","fullMobileNo":"+964 334 933 4658","email":"nclemensonv@google.co.jp","signupDate":"2024-11-29"},
    {"id":33,"fullName":"Carlin Feldstein","fullMobileNo":"+387 490 503 3671","email":"cfeldsteinw@wikimedia.org","signupDate":"2024-07-24"},
    {"id":34,"fullName":"Hinze Verity","fullMobileNo":"+86 849 896 4276","email":"hverityx@blogger.com","signupDate":"2024-09-12"},
    {"id":35,"fullName":"Cassaundra Comazzo","fullMobileNo":"+992 250 230 9138","email":"ccomazzoy@typepad.com","signupDate":"2024-10-24"},
    {"id":36,"fullName":"Clareta Gley","fullMobileNo":"+967 427 628 2581","email":"cgleyz@com.com","signupDate":"2024-05-08"},
    {"id":37,"fullName":"Freddie Geddes","fullMobileNo":"+86 871 281 9304","email":"fgeddes10@linkedin.com","signupDate":"2024-12-03"},
    {"id":38,"fullName":"Tina Devo","fullMobileNo":"+370 521 168 4560","email":"tdevo11@shareasale.com","signupDate":"2024-12-04"},
    {"id":39,"fullName":"Gasparo Horsburgh","fullMobileNo":"+86 760 276 2169","email":"ghorsburgh12@unesco.org","signupDate":"2024-05-27"},
    {"id":40,"fullName":"Goddart Snead","fullMobileNo":"+46 873 619 1489","email":"gsnead13@europa.eu","signupDate":"2024-05-12"},
    {"id":41,"fullName":"Mose Brimblecombe","fullMobileNo":"+7 730 906 3612","email":"mbrimblecombe14@squidoo.com","signupDate":"2024-02-06"},
    {"id":42,"fullName":"Ilise Gerhardt","fullMobileNo":"+57 108 439 5672","email":"igerhardt15@google.co.jp","signupDate":"2024-03-15"},
    {"id":43,"fullName":"Axel Mayworth","fullMobileNo":"+380 537 931 9208","email":"amayworth16@mail.ru","signupDate":"2024-08-04"},
    {"id":44,"fullName":"Regen Leynham","fullMobileNo":"+234 871 267 9874","email":"rleynham17@fastcompany.com","signupDate":"2024-12-25"},
    {"id":45,"fullName":"Arne Ladlow","fullMobileNo":"+963 786 652 8615","email":"aladlow18@utexas.edu","signupDate":"2024-05-08"},
    {"id":46,"fullName":"Gilberta Loughlin","fullMobileNo":"+81 988 567 3676","email":"gloughlin19@sciencedaily.com","signupDate":"2024-01-19"},
    {"id":47,"fullName":"Rolland Oppy","fullMobileNo":"+84 944 146 6167","email":"roppy1a@alibaba.com","signupDate":"2024-05-09"},
    {"id":48,"fullName":"Morgun Speer","fullMobileNo":"+263 315 767 9248","email":"mspeer1b@senate.gov","signupDate":"2024-02-19"},
    {"id":49,"fullName":"Ara Maciak","fullMobileNo":"+63 729 299 4054","email":"amaciak1c@mail.ru","signupDate":"2024-11-06"},
    {"id":50,"fullName":"Darlleen Kenway","fullMobileNo":"+351 305 474 3855","email":"dkenway1d@photobucket.com","signupDate":"2024-10-01"}]



    export const getUsers = ({page, limit}:GetUserProps) : User[] => {
        const array = [];
        for (let i = (page-1)*limit; i < page*limit && users[i]; i++) {
            array.push(users[i]);
        }
        return array;
    }

    export const getLength = function() {
        return users.length;
    }