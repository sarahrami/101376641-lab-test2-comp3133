# 101376641LabTest2Comp3133

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

This Project has:
- Two components
    - missionlist - Display fetched fields (mission_name, launch_year, details, mission_patch_small) from the SpaceX API.
    - missiondetails - Display more details from fetched data by getting flight_number.
- One service
  - Handles HTTP requests to the SpaceX API 
  - Implement the logic to fetch data from the provided SpaceX API endpoint.
  - Implement search or filter functionality based on the launch year.
  - Implement the logic to fetch details of a selected mission using the SpaceX API.
    
- One interface:
  - Contains the structure of data fetched from the SpaceX API.

Styling:
- Css
- Bootstrap

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
