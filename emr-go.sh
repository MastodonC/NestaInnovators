#!/bin/bash

EMR="/usr/local/elastic-mapreduce/elastic-mapreduce -c ${HOME}/.config/elastic-mapreduce/credentials.json"

cmd=$1; shift;

case $cmd in
    ubers3)
         lein clean
         lein uberjar
         aws --profile mastodonc s3 cp target/nesta-innovators-0.1.0-SNAPSHOT-standalone.jar s3://mc-deployments/nesta.jar
        ;;
    start)
         bid_price=$1; shift
         if [ -z "${bid_price}" ]; then
            echo "must supply bid price"
            exit;
         fi
          read -p "Start with bid price of \$${bid_price}? [YN]: " yn
          case $yn in
            [Yy]*) ;;
            *) exit;
          esac
          response=$($EMR \
            --create --name nesta \
            --debug \
            --log-uri s3://mc-innovators-log \
            --instance-group master \
            --instance-count 1 \
            --bid-price $bid_price \
            --instance-type m1.xlarge \
            --instance-group core \
            --instance-count 1 \
            --bid-price $bid_price \
            --instance-type m1.xlarge \
            --add-instance-group task \
            --bid-price $bid_price \
            --instance-type m1.xlarge \
            --instance-count 2 \
            --alive)
          echo $response
          export EMR_JOB_FLOW=${response#Create job flow }
        ;;
     add-jar-step)
          name=$1; shift
          jar=$1; shift
          args=$(printf -- "--args %s " "$@")
          if [ -z "${EMR_JOB_FLOW}" ]; then
              read -p "Enter Job Flow Id: " EMR_JOB_FLOW
          fi
          echo "Add jar ${jar} with args ${args}"
          read -p "to job flow ${EMR_JOB_FLOW} ? [YN]: " yn
          case $yn in
            [Yy]*);;
            *) exit;
          esac

          $EMR \
            --jobflow ${EMR_JOB_FLOW} \
            --jar ${jar} \
            --step-name ${name} \
            --arg ${name} \
            ${args}
        ;;
     stop)
          if [ -z "${EMR_JOB_FLOW}" ]; then
              read -p "Enter Job Flow Id: " EMR_JOB_FLOW
          fi
          $EMR \
            --jobflow ${EMR_JOB_FLOW} \
            --terminate
        ;;
     *)
          echo "No such command"
        ;;
esac
