'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'card-audit',
            description: 'Carga de API',
            failureDescription: 'Tiempo de carga excedido (3s)',
            helpText: 'Usado para medir el tiempo de respuesta del API' + ' https://api-ratp.pierre-grimaud.fr/v3/schedules/',

            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToCard;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = LoadAudit;