import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * CKEditor configuration
   */
  editorConfig = {
    toolbar: [
      { name: 'basicstyles', items: [ 'Bold', 'Italic' ] },
      { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo' ] },
      { name: 'document', items: ['Source'] }
    ],
    allowedContent: true,
    fullPage: true,
    startupMode: 'source',
    height: '700px'
  };

  fieldMap: Map<string, string> = new Map<string, string>([
    ['studentFirstName', '{{ student.firstName }}'],
    ['studentLastName', '{{ student.lastName }}'],
    ['courseName', '{{ course.name }}'],
    ['courseHours', '{{ course.hours }}']
  ]);

  constructor() {
  }

  allowDrop(ev): void {
    ev.preventDefault();
  }

  drag(ev): void {
    ev.dataTransfer.setData('dragElement', ev.target.id);
  }

  drop(ev): void {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('dragElement');
    const dataValue = this.fieldMap.get(data);

    const startPos = ev.target.selectionStart;
    const endPos = ev.target.selectionEnd;

    ev.target.value = ev.target.value.substring(0, startPos)
      + dataValue
      + ev.target.value.substring(endPos, ev.target.value.length);
  }


}
