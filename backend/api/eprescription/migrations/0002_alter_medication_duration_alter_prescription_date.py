# Generated by Django 4.0 on 2022-01-14 08:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eprescription', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medication',
            name='duration',
            field=models.DateField(default=datetime.datetime(2022, 1, 14, 8, 25, 29, 113108)),
        ),
        migrations.AlterField(
            model_name='prescription',
            name='date',
            field=models.DateField(default=datetime.datetime(2022, 1, 14, 8, 25, 29, 112605)),
        ),
    ]
