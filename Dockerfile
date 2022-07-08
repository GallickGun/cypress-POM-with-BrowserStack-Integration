FROM cypress/browsers:node12.6.0-chrome75

## Create a folder to store the project
RUN mkdir /belajar-jenkins

## Declare it our workdirectory
WORKDIR /belajar-jenkins

## Make copies of essential files
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress

## Install depedencies
RUN npm install

## Executable commands the container will use
ENTRYPOINT [ "npx", "cypress", "run" ]

CMD [ "" ]