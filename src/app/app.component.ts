import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CKEditor4} from 'ckeditor4-angular';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Provides access to properties and methods of the CkEditor
   */
  editorControl: CKEditor4.Editor;

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

  templateEditor: FormGroup;


  constructor(private formBuilder: FormBuilder) {

  }

  allowDrop(ev): void {
    ev.preventDefault();
  }

  drag(ev): void {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  drop(ev): void {
    ev.preventDefault();
    debugger;
    var data = ev.dataTransfer.getData("text");

    var valuex = '';

    if (data === 'studentFirstName') {
      valuex = '{{ student.firstName }}';
    }

    //var valuex = document.getElementById(data).textContent;
    //console.log(document.getElementById(data));
    //ev.target.appendChild(document.getElementById(data));
    //debugger;
    console.log('start: ' + ev.target.selectionStart);
    console.log('end: ' + ev.target.selectionEnd);

    var startPos = ev.target.selectionStart;
    var endPos = ev.target.selectionEnd;

    ev.target.value = ev.target.value.substring(0, startPos)
      + valuex
      + ev.target.value.substring(endPos, ev.target.value.length);

    //ev.target.value = data;
    //ev.target.appendChild('steve');
    // ev.target.dataValue =
    //   '<span class="h-card">' +
    //   '<a href="mailto:' + 'contact.email' + '" class="p-name u-email">' + 'contact.name' + '</a>' +
    //   ' ' +
    //   '<span class="p-tel">' + 'contact.tel' + '</span>' +
    //   '</span>';
  }


}
