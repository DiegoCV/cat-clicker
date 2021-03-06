$(function() {
    var model = {
        generalCount: 0,
        isAdmin: false,
        currentCat: null,
        cats: [{
            id: 0,
            name: "Boss",
            src: "https://live.staticflickr.com/3903/15218475961_963a4c116e_b.jpg",
            clickCount: 0
        }, {
            id: 1,
            name: "Puma",
            src: "https://live.staticflickr.com/3436/3717404325_db41d8d687_b.jpg",
            clickCount: 0
        }, {
            id: 2,
            name: "Mirringo",
            src: "https://live.staticflickr.com/2106/2207159142_8206ab6984.jpg",
            clickCount: 0
        }, {
            id: 3,
            name: "Tax",
            src: "https://live.staticflickr.com/5479/9806556103_bb21b3f223_b.jpg",
            clickCount: 0
        }, {
            id: 4,
            name: "Mancha",
            src: "https://live.staticflickr.com/3894/14962688165_04759a8b03_b.jpg",
            clickCount: 0
        }]
    };

    var octopus = {
        init: function() {
            model.currentCat = model.cats[0];
            viewList.init();
            viewDisplay.init();
            viewAdminButton.init();
            viewFormNewCat.init();
        },
        incrementClickCount: function() {
            model.currentCat.clickCount++;
            model.generalCount++;
            viewDisplay.init();
            viewDisplayCount.init();
        },
        getAllCats: function() {
            return model.cats;
        },
        getCurrentCat: function() {
            return model.currentCat;
        },
        getGeneralCount: function() {
            return model.generalCount;
        },
        setCurrentCat: function(cat) {
            model.currentCat = cat;
        },
        isAdmin: function() {
            return model.isAdmin;
        },
        changeAdminStatus: function() {
            model.isAdmin = !model.isAdmin;
            viewFormNewCat.init();
        },
        addNewCat: function(nameCat, source, counter) {
            lengthCats = model.cats.length;
            lastCat = model.cats[lengthCats - 1];
            console.log(lastCat.id);
            model.cats.push({
                id: lastCat.id + 1,
                name: nameCat,
                src: source,
                clickCount: counter
            });
            model.currentCat = model.cats[lengthCats];
            model.isAdmin = false;
            viewList.init();
            viewFormNewCat.init();
        }
    };

    var viewList = {
        init: function() {
            this.listNameCats = $("#list_name_cats");
            this.listNameCats.html("");
            viewList.render();
        },
        render: function() {
            var listAux = [];
            octopus.getAllCats().forEach(function(cat) {
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(cat.name));
                li.addEventListener("click", (function(catCopy) {
                    return function() {
                        octopus.setCurrentCat(catCopy);
                        viewDisplay.init();
                    }
                })(cat));
                listAux.push(li);
            });
            this.listNameCats.append(listAux);
        }
    };

    var viewDisplay = {
        init: function() {
            this.displayCat = $("#display_cat");
            this.catTemplate = $('script[data-template="cat"]').html();
            this.displayCat.html("");
            this.render()
        },
        render: function() {
            let cat = octopus.getCurrentCat();
            this.catTemplate = this.catTemplate.replace(/{{id}}/g, cat.id);
            this.catTemplate = this.catTemplate.replace(/{{name}}/g, cat.name);
            this.catTemplate = this.catTemplate.replace(/{{src}}/g, cat.src);
            this.catTemplate = this.catTemplate.replace(/{{clickCount}}/g, cat.clickCount);
            this.displayCat.append(this.catTemplate);
            let image = document.getElementById("imageCat_" + cat.id);
            image.addEventListener("click", (function(catCopy) {
                return function() {
                    octopus.incrementClickCount();
                }
            })(cat));
        }
    };

    var viewDisplayCount = {
        init: function() {
            this.displayCount = $("#display-count");
            this.displayCount.html("");
            viewDisplayCount.render();
        },
        render: function() {
            htmlStr = "<h1>" + octopus.getGeneralCount() + "</h1>";
            this.displayCount.append(htmlStr);
        }
    };

    var viewFormNewCat = {
        init: function() {
            this.formNewCat = $("#formNewCat");
            this.render();
        },
        render: function() {
            isAdmin = octopus.isAdmin();
            if (isAdmin) {
                this.formNewCat.show();
            } else {
                this.formNewCat.hide();
            }

        }
    };

    var viewAdminButton = {
        init: function() {
            this.adminButton = $("#admin-button");
            this.adminButton.on("click", function() {
                octopus.changeAdminStatus();
            });
            this.cancelNewCat = $("#cancel-new-cat");
            this.cancelNewCat.on("click", function() {
                octopus.changeAdminStatus();
            });
            this.formNewCat = $("#formNewCat");
            this.formNewCat.submit(function(e) {
                e.preventDefault();
                nameCat = $("#nameCat");
                src = $("#src");
                counter = $("#counter");
                octopus.addNewCat(nameCat.val(), src.val(), counter.val());
                nameCat.val("");
                src.val("");
                counter.val("");
            });
        }
    };

    octopus.init();
});