const BASEURL = "assets/js/json/";

//ajaxcallback funkcija 
function AjaxCallBack(nazivFajla, rezultat){
    $.ajax({
        url: BASEURL + nazivFajla,
        method: "get",
        dataType: "JSON",
        success: rezultat,
        error: function(xhr){
            console.log(xhr);
        }
    });
}

AjaxCallBack("navigacija.json", function(rezultat){
    console.log(rezultat);
    StampajNavigaciju(rezultat, navbarIspis);
});

function StampajNavigaciju(podaci){
    let ispis = "";

    for (let p of podaci)
    {
        ispis += `<li class="nav-link"><a href="${p.href}">${p.nazivStr}</a></li>`;
    }

    $("#navbarIspis").html(ispis);
}

function IspisiKartice(podaci){
    let ispis="";

    for (let p of podaci)
    {
        ispis += `<div class="col-md-4">
        <div class="card mb-4 product-wap rounded-0">
            <div class="card rounded-0">
                <img class="card-img rounded-0 img-fluid" src="${p.slika.src} alt="${p.slika.alt}"">
                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul class="list-unstyled">
                        <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <a href="shop-single.html" class="h3 text-decoration-none">Product Name</a>

                <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                        ${IspisiZvezdice()}
                    </li>
                </ul>
                <p class="text-center mb-0">$${IspisiCenu()}</p>

            </div>
        </div>
    </div>
        
        
        
        `
    }
}
/*
    function DinamickiIspisNavigacije(link, imeStr, gdeIspisati){
        console.log("Petar");

        let ispis = "";
    
        ispis += `<li class="scroll-active"><a href="${link}">${imeStr}</a></li>`;
    
        document.querySelector(`${gdeIspisati}`).innerHTML = ispis;
    };
*/



