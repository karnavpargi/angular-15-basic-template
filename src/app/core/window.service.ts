import { Injectable, Inject } from '@angular/core';
import { WINDOW } from './providers/window.provider';
@Injectable()
export class WindowService {
  constructor(@Inject(WINDOW) private window: Window) {}
  getHostname(): string {
    return this.window.location.hostname;
  }
  getPathname(): string {
    return this.window.location.pathname;
  }
  getLocation(): Location {
    return this.window.location;
  }
  replace(url: string) {
    this.window.location.replace(url);
  }
  getEnvironment() {
    const host = this.getHostname();
    const hostList = ['dev', 'train', 'test', 'localhost'];
    const env = ['cloud', 'dev', 'train', 'test', 'local'];
    const index = hostList.findIndex((e) => {
      const matchString = e === 'localhost' ? e : `-${e}`;
      return host.includes(matchString);
    });
    index ? env[index] : 'prod';
  }
}
