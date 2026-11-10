# Commandes exécutées dans le terminal

## 1. Vérifier l'installation de PHP

```bash
php -v
```

Affiche la version de PHP installée. Cela confirme que `C:\php` est bien dans le PATH.

## 2. Démarrer le serveur local

```bash
php -S localhost:8000
```

Lance le serveur web intégré de PHP sur le port 8000, depuis le dossier qui contient `test-serveur.php`.

## 3. Tester dans le navigateur

Adresse à ouvrir :

```
http://localhost:8000/test-serveur.php
```

Résultat attendu : le message « Environnement local PHP opérationnel » s'affiche sur la page.

## 4. Arrêter le serveur

Appuyer sur `Ctrl + C` dans le terminal.