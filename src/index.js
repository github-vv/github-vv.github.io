import {LitElement, html} from 'lit-element';
import {style} from './style.js';

import isSameDay from 'date-fns/isSameDay';
import {Service} from './service.js';

class Main extends LitElement {
    static get styles() {
        return style;
    }

    static get properties() {
        return {
            selectedDay: {type: Date},
            showPopup: {type: Boolean},
            appointments: {type: Array}
        }
    }

    constructor() {
        super();
        this.selectedDay = null;
        this.showPopup = false;
        this.appointments = [];
        this.hours = {};
        this.weekdays = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'];

        this.startDate = new Date();
        this.currentDayIndex = this.startDate.getDay() - 1;
        if (this.currentDayIndex < 0) this.currentDayIndex = 0;

        this.days = this.weekdays
            .slice(this.currentDayIndex)// week from current day
            .concat(this.weekdays) // full week
            .map((dayName, index) => {
                const nextDate = new Date(this.startDate); // next day date
                nextDate.setDate(nextDate.getDate() + index);

                return {
                    name: dayName,
                    date: nextDate
                };
            });
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        const user = 'jx28fq';//prompt('Codul tau de utilizator:', 'jx28fq');
        if (!user) return alert('Nu ai introdus niciun cod de utilizator!');
        else {
            if (Service.checkUser(user)) {
                this.user = user;
                this.getAppointments();
                Service.getHours().then(data => this.hours = data);
            } else
                alert('Codul de utilizator nu a fost găsit!');
        }
    }

    clickDay(day) {
        if (!this.user) return alert('Nu esti conectat!');
        this.displayHours = day.isFirstWeek ? this.hours.firstWeek : this.hours.secondWeek;

        this.selectedDay = day;
        this.showPopup = true;
    }

    saveAppointment(hour) {
        const confirmation = confirm(`Ești sigur că vrei ${this.selectedDay.name} ${this.selectedDay.date.toLocaleDateString()} ora ${hour}?`);
        if (confirmation) {
            this.appointments.push({
                id: this.appointments.length + 1,
                user: this.user,
                date: this.selectedDay.date,
                hour
            });

            Service.save(this.appointments).then(() => {
                console.log('done!');
                this.showPopup = false;
            });
        }
    }

    getAppointments() {
        Service.get().then(data => this.appointments = data);
    }

    deleteAppointment(appointmentId) {
        const appointments = this.appointments.filter(appointment => appointment.id !== appointmentId);

        Service.save(appointments).then(() => {
            console.log('done!');
            this.appointments = appointments;
        });
    }

    getAppointmentClass(dateString) {
        const date = new Date(dateString);

        const count = this.appointments.filter(appointment => {
            const appointmentDate = new Date(appointment.date);
            if(isSameDay(date, appointmentDate))
                return true;
        }).length;

        if (!count)
            return 'green';
        else if (count < 4)
            return 'orange';
        else
            return 'red';
    }

    render() {
        return html`
            ${this.showPopup ? html`
                <div class="overlay" @click="${() => this.showPopup = false}"></div>
                <div class="popup">
                    <strong style="display: block">Alege ora</strong>
                    <small>pentru ${this.selectedDay.name} ${this.selectedDay.date.toLocaleDateString()}</small>:
                    ${this.displayHours.map(hour =>
                            html`
                                <div class="hour" @click="${() => this.saveAppointment(hour)}">${hour}</div>`
                    )}
                </div>` : ''}

            <div class="info">
                <strong>Legendă:</strong>
                <span class="free"></span> Liber
                <span class="crowded"></span> Aglomerat
                <span class="full"></span> Plin
            </div>

            <strong>Programările tale active:</strong>

            <div class="appointments">
                ${this.appointments.map(appointment => html`
                    <div>
                        <small>${new Date(appointment.date).toLocaleDateString()}
                            ${appointment.hour}</small>
                        <button class="delete" @click="${() => this.deleteAppointment(appointment.id)}">
                            &#215;
                        </button>
                    </div>
                `)}
            </div>
            <hr/>

            ${this.days.map((day, index) =>
                    html`
                        ${day.name === this.weekdays[0] && index !== 0 ? html`
                            <hr/>` : ''}

                        <div class="day ${this.getAppointmentClass(day.date)}" @click="${() => this.clickDay(day)}">
                            <strong>${day.name}</strong>
                            <small style="display: block">${day.date.toLocaleDateString()}</small>
                        </div>`
            )}
        `
    }
}

customElements.define('main-element', Main);