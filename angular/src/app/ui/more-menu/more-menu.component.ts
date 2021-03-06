import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-more-menu',
  templateUrl: './more-menu.component.html',
  styleUrls: ['./more-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreMenuComponent {
  readonly isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  @Output() clickFavorite = new EventEmitter();
  @Output() clickRemove = new EventEmitter();
  @Output() clickRestore = new EventEmitter();

  @Input() isFavorite: boolean;
  @Input() isArchived: boolean;

  isShow = false;

  @ViewChild('template', { read: TemplateRef, static: false }) templateRef: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.hideMenu();
    }
  }

  constructor(
    private elementRef: ElementRef,
    private themeService: ThemeService
  ) { }

  showMenu(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.isShow = true;
  }

  hideMenu(): void {
    this.viewContainerRef.clear();
    this.isShow = false;
  }

  onRemove(event: any): void {
    event.stopPropagation();
    this.clickRemove.emit();
    this.hideMenu();
  }

  onFavorite(event: any): void {
    event.stopPropagation();
    this.clickFavorite.emit();
    this.hideMenu();
  }

  onMore(event: any): void {
    event.stopPropagation();
    this.isShow ? this.hideMenu() : this.showMenu();
  }

  onRestore(event: any): void {
    event.stopPropagation();
    this.clickRestore.emit();
  }
}
