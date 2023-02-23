## Version-Manager

Das Ziel dieser aufgabe ist es, einen einfache Version-Manager zu erstellen.
Der Manager soll die Version einer Software beinhalten und diese verwalten können.\
Die Version besteht insgesamt aus einer `Major`, `Minor` und `Patch` Version, z.B. `v1.12.4` (MAJOR = 1, MINOR = 12, PATCH = 4).
Dazu sollst du eine neue VersionManager-Klasse erstellen, welche das IVersionManager-Interface implementiert folgende Methoden enthaltet:

- `major()`: erhöht die `MAJOR` Version um 1 und setzt die `MINOR` und `PATCH` Versionen auf 0 zurück.
- `minor()`: erhöht die `MINOR` Version um 1 und setzt die `PATCH` Version auf 0 zurück.
- `patch()`: erhöht die `PATCH` Version um 1'
- `rollback()`: setzt die `MAJOR`, `MINOR` und `PATCH` Versionen zum Stand vor dem letzten Aufruf von `major`/`minor`/`patch` zurück,
                oder wirft einen Fehler mit der Nachricht `Cannot rollback!` wenn keine ältere Version vorhanden ist. 
                Diese Funktion sollte auch mehrmals nacheinander aufgerufen werden können, um mehrere Versionen zurückgehen zu können.
- `release`: Gibt die version als String im Format `{MAJOR}.{MINOR}.{PATCH}` aus.

Falls die Version noch nicht angepasst wurde, soll die den Default-Wert `v0.0.1` haben.

****

**P.S. Alle dieser Methoden sollen chainable sein, sprich es soll möglich sein, diese direkt nacheinander aufzurufen, z.B.**
```js
manager.major().minor().release()
```
