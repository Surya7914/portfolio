import os
from PIL import Image
from pillow_heif import register_heif_opener

# This allows Pillow to understand HEIF/HEIC files
register_heif_opener()

def convert_heic_to_jpg(source_path, target_path):
    try:
        # Open the image
        image = Image.open(source_path)
        
        # Convert to RGB (HEIC can sometimes be in CMYK or have transparency)
        image = image.convert("RGB")
        
        # Save as JPEG
        image.save(target_path, "JPEG", quality=95)
        print(f"Successfully converted: {source_path} -> {target_path}")
        
    except Exception as e:
        print(f"Error converting {source_path}: {e}")

# Usage
file_name = "my_photo.heic"
output_name = "my_photo.jpg"

convert_heic_to_jpg(file_name, output_name)