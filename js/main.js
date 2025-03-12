// Alert de Sucesso
// function newsLatter() {
//     var nome = document.getElementById('nome').value;
//     var email = document.getElementById('email').value;

//     document.getElementById('alerta').innerHTML = 
//         '<div class="alert alert-success" role="alert">Login realizado com sucesso!</div>';
// }



/**
 * Init isotope layout and filters
 */

$(document).ready(function () {
    // Inicializa o grid do Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.product',
        layoutMode: 'fitRows'
    });

    // Evento de clique nos botões de filtro
    $('.filter-buttons button').click(function () {
        // Remove a classe ativa de todos os botões e adiciona no botão clicado
        $('.filter-buttons button').removeClass('active');
        $(this).addClass('active');

        // Aplica o filtro selecionado
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // Ativa automaticamente a exibição dos destaques ao carregar a página
    $grid.isotope({ filter: '.destaque' });

    // Inicializa a funcionalidade de Isotope para cada container com layout
    $('.isotope-layout').each(function () {
        var layout = $(this).data('layout') ?? 'masonry';
        var filter = $(this).data('default-filter') ?? '*';
        var sort = $(this).data('sort') ?? 'original-order';

        var $isotopeContainer = $(this).find('.isotope-container');

        // Inicializa Isotope com imagens carregadas
        $isotopeContainer.imagesLoaded(function () {
            $isotopeContainer.isotope({
                itemSelector: '.isotope-item',
                layoutMode: layout,
                filter: filter,
                sortBy: sort
            });
        });

        // Evento de clique para filtros dentro do layout
        $(this).find('.isotope-filters li').click(function () {
            $(this).siblings('.filter-active').removeClass('filter-active');
            $(this).addClass('filter-active');
            $isotopeContainer.isotope({
                filter: $(this).data('filter')
            });

            // Se AOS estiver presente, inicializa
            if (typeof aosInit === 'function') {
                aosInit();
            }
        });
    });
});
