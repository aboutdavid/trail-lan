#!/bin/bash
echo Spinning up library
chmod +rwx /library

ZIMS="/library/*.zim"
for zim in $ZIMS
do
  echo "kiwix-manage /library.xml add $zim"
  kiwix-manage /library.xml add $zim
done

echo serve
kiwix-serve --library /library.xml -p $PORT