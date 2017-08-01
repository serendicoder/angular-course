import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'ai-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent {
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        console.log("ngonchanges star width");
        this.starWidth = (this.rating * 86) / 5;
    }

    onClick() {
        this.ratingClicked.emit(`The rating $(this.rating) was clicked!`);
    }
}