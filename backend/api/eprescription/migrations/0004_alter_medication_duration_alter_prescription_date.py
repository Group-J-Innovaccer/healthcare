# Generated by Django 4.0.1 on 2022-01-14 12:11

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eprescription', '0003_alter_medication_duration_alter_prescription_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medication',
            name='duration',
            field=models.DateField(default=datetime.datetime(2022, 1, 14, 12, 11, 5, 702151)),
        ),
        migrations.AlterField(
            model_name='prescription',
            name='date',
            field=models.DateField(default=datetime.datetime(2022, 1, 14, 12, 11, 5, 701697)),
        ),
    ]
