# Generated by Django 4.0.4 on 2022-05-10 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('animal_adopters', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='animaladopter',
            name='adopter_first_name',
            field=models.CharField(default=None, max_length=255),
        ),
    ]