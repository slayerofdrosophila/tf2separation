#!/bin/bash

# Download some logs.tf logs

LOGID=3149550

for i in {1..100000}
do
	wget logs.tf/json/$LOGID
	LOGID=$(($LOGID-1))
	sleep 0.1
done


