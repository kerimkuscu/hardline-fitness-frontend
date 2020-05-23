import * as moment from 'moment-timezone';

export default {
    methods: {
        getHumanizedDatetime(date) {
            if (!moment(date).isValid()) {
                return '-';
            }

            return moment(date).fromNow();
        },

        fromUTC(date, timezone = 'Europe/Istanbul') {
            if (!moment(date).isValid()) {
                return null;
            }

            return moment.utc(date).tz(timezone);
        },
    }

};
