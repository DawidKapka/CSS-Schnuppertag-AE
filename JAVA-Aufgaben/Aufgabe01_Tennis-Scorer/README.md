## Tennis Scorer
In dieser Aufgabe entwickelst du einen Tennis Punktezähler. Dazu soll das folgende Interface verwendet werden:
```java
public interface TennisScorer {
    void playerAScores();
    void playerBScores();
    String getScore();
}
```
****
### Tennisregeln
**Punkte**: 0, 15, 30, 40, Deuce, Advantage, Game

Zuerst wird bis 40 gezählt. Macht dieser Spieler noch einen Punkt, so gewinnt er das Game.
Erreicht der zweite Spieler ebenfalls den Punktestand 40, ergibt sich ein Deuce (beide gleich viel Punkte).
Punktet einer der Spieler, ergibt sich für ihn ein Advantage. Punktet noch einmal derselbe Spieler, so gewinnt er das Spiel mit Game.
Gleicht der andere Spieler aus, ergibt sich erneut ein Deuce. Es wird weitergespielt, bis ein Spieler gewinnt.

### Beispiel

**Spieler A gewinnt, Spieler B macht keinen einzigen Punkt**:
> 0 - 0, 15 - 0, 30 - 0, 40 - 0, Game -

**Spieler A punktet, Spieler B gleicht jeweils aus. Am Schluss punktet Spieler B zweimal am Stück und gewinnt das Spiel**:
> 0 - 0, 15 - 0, 15 - 15, 30 - 15, 30 - 30, 40 - 30, Deuce, Advantage - , Deuce, - Advantage, - Game
