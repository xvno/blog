#! /bin/bash

ips=$(curl cip.cc | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)")
# echo $ips
# grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" $cip
IP_PATH="/opt/dns/IP"
IP_LOG="/opt/dns/log"
RET_ALI="/opt/dns/ali"
cip=""
preIP=$(cat $IP_PATH)

for IP in $ips; do
    cip=$IP
done

echo $cip:$preIP
if [ "$cip" = "$preIP" ]; then
  echo "$(date):$cip: Not modified"
else
  echo $cip > $IP_PATH
  echo "$(date): $preIP ---> $cip" >> $IP_LOG
#   $(aliyun alidns UpdateDomainRecord --RecordId 715258603461599232 --RR dam --Type A --Value 81.70.242.88) >> $IP_LOG
fi

ret=$(cat $RET_ALI)
echo $ret
