## Slot Machine

In dieser Aufgabe erstellst du einen Spielautomat. Der Spielautomat besteht aus 3 Reihen à je 5 Felder, also insgesamt 15 Feldern.
Die Felder können jeweils eins von den folgenden Symbolen enthalten: `9`, `10`, `J`, `Q`, `K`, `A`
```shell
Beispiel:

["Q", "K", "A", "A", "A"]
["10", "A", "Q", "9", "J"]
["A", "A", "A", "J", "K"]
```

Beim Start des Spiels werden die Felder zufällig mit Symbolen befüllt.
Dabei gibt es 5 verschiedene Gewinnmuster:

```shell
X kann ein beliebiges Symbol sein.

["X", "X", "X", "X", "X"]
["", "", "", "", ""]
["", "", "", "", ""]


["", "", "", "", ""]
["X", "X", "X", "X", "X"]
["", "", "", "", ""]


["", "", "", "", ""]
["", "", "", "", ""]
["X", "X", "X", "X", "X"]


["X", "", "", "", "X"]
["", "X", "", "X", ""]
["", "", "X", "", ""]


["", "", "X", "", ""]
["", "X", "", "X", ""]
["X", "", "", "", "X"]

```
Jede von diesen Gewinnkombinationen gibt 50 Punkte. Es können jedoch auch mehrere Kombinationen in einem Spiel vorkommen. In diesem Fall werden die Punkte addiert.

```shell
Beispiel:

["A", "A", "A", "A", "A"]
["10", "9", "A", "A", "J"]          -> 50 Punkte
["Q", "10", "10", "K", "10"]

["A", "A", "Q", "A", "J"]
["10", "9", "A", "A", "J"]          -> 0 Punkte
["Q", "10", "10", "K", "10"]

["A", "A", "A", "A", "A"]
["10", "A", "Q", "A", "J"]          -> 100 Punkte
["A", "10", "10", "K", "A"]
```
