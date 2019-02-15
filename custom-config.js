'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer'
        ]
    }],

    audits: [
        'card-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Métricas de carga del API',
            description: 'Metrica para cargar los datos del API',
            audits: [
                {id: 'card-audit', weight: 1}
            ]
        }
    }
};