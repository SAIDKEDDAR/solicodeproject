<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Blog</title>
</head>
<body>
    <h1>Liste des Articles</h1>

    <div class="grille-articles">
        <?php foreach ($articles as $article): ?>
            <div class="carte-article">
                
                <a href="article.php?id=<?= $article['id'] ?>" class="carte-image">
                    <img src="images/<?= htmlspecialchars($article['image']) ?>" alt="Illustration" width="150">
                </a>
                
                <span class="etiquette-categorie"><?= htmlspecialchars($article['categorie_libelle']) ?></span>
                
                <div class="carte-contenu">
                    <h3><a href="article.php?id=<?= $article['id'] ?>"><?= htmlspecialchars($article['titre']) ?></a></h3>
                    
                    <p><?= htmlspecialchars(substr($article['contenu'], 0, 100)) ?>...</p>
                
                    <div class="carte-meta">
                        <span><?= date('d M Y', strtotime($article['date_creation'])) ?></span> | 
                        <span>5 min</span>
                    </div>
                </div>

            </div>
        <?php endforeach; ?>
    </div>

</body>
</html>