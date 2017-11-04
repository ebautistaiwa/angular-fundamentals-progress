import { Component, Input } from '@angular/core'

import { Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [class.checked-in]="detail.checkedIn"></span>
            <div *ngIf="editing">
                <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
            </div>
            <div *ngIf="!editing">
                {{ detail.fullname }}
            </div>
            <p>{{ passenger | json }}
            <div class="date">
                Check in date: 
                {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not check in' }}
            </div>
            <div class="children">
                Children: {{ detail.children?.length || 0 }}
            </div>
            <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
        </div>
    `
})
export class PassengerDetailComponent{
    @Input()
    detail: Passenger;
    editing: boolean = false;
    constructor(){}

    onNameChange(value: string){
        this.detail.fullname = value;
    }

    toggleEdit(){
        this.editing =  !this.editing;
    }
}